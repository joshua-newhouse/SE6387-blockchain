#!/bin/bash

source ../util/logging.sh

source conf/setup.env

function Main() {
    $InfoMessage "Starting Validator"
    sudo -u "${SAWTOOTH_USR}" sawtooth-validator \
        --bind component:"${VALIDATOR_COMPONENT_ENDPT}" \
        --bind network:"${VALIDATOR_NETWORK_ENDPT}" \
        --bind consensus:"${VALIDATOR_CONSENSUS_ENDPT}" \
        --endpoint "${VALIDATOR_PUBLIC_ENDPT}" \
        --peers "${PEERS_LIST}"

    return $?
}

Main "$@"
exit $?
