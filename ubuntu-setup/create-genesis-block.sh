#!/bin/bash

source ../util/logging.sh

source conf/setup.env

function Main() {
    [[ "${GENESIS_NODE}" != "$(hostname)" ]] && $InfoMessage "Not the genesis node" && return 0

    local nUserKeys=$(ls "${HOME}/.sawtooth/keys/" | wc -w)
    local nValidatorKeys=$(ls /etc/sawtooth/keys/ | wc -w)

    if [[ ${nUserKeys} -ne 2 ]] || [[ ${nValidatorKeys} -ne 2 ]]; then
        $ErrMessage "User or Validator keys are missing" && return 1
    fi

    pushd /tmp || return 1

    $InfoMessage "Creating a batch with a settings proposal for the genesis block"
    sawset genesis --key "${HOME}"/.sawtooth/keys/"${SAWTOOTH_USR_KEY}".priv -o config-genesis.batch
    [[ $? -ne 0 ]] && $ErrMessage "Failed creating settings proposal" && return 1

    $InfoMessage "Creating a batch to initialize the consensus settings"
    sawset proposal create --key "${HOME}"/.sawtooth/keys/"${SAWTOOTH_USR_KEY}".priv \
        -o config-consensus.batch \
        sawtooth.consensus.algorithm.name=PoET \
        sawtooth.consensus.algorithm.version=0.1 \
        sawtooth.poet.report_public_key_pem="$(cat /etc/sawtooth/simulator_rk_pub.pem)" \
        sawtooth.poet.valid_enclave_measurements="$(poet enclave measurement)" \
        sawtooth.poet.valid_enclave_basenames="$(poet enclave basename)"
    [[ $? -ne 0 ]] && $ErrMessage "Failed initializing the consensus settings" && return 1

    $InfoMessage "Creating a batch to register the first Sawtooth node with the Validator Registry T.P."
    poet registration create --key /etc/sawtooth/keys/validator.priv -o poet.batch
    [[ $? -ne 0 ]] && $ErrMessage "Failed to create a batch to register the first Sawtooth node" && return 1

    $InfoMessage "Creating a batch to configure other consensus settings"
    sawset proposal create --key "${HOME}"/.sawtooth/keys/"${SAWTOOTH_USR_KEY}".priv \
        -o poet-settings.batch \
        sawtooth.poet.target_wait_time=5 \
        sawtooth.poet.initial_wait_time=25 \
        sawtooth.publisher.max_batches_per_block=100
    [[ $? -ne 0 ]] && $ErrMessage "Failed initializing other consensus settings" && return 1

    $InfoMessage "Creating a single genesis batch"
    sudo -u "${SAWTOOTH_USR}" sawadm genesis config-genesis.batch config-consensus.batch poet.batch poet-settings.batch
    [[ $? -ne 0 ]] && $ErrMessage "Failed to create a single genesis batch" && return 1

    popd || return 1
}

Main "$@"
exit $?
