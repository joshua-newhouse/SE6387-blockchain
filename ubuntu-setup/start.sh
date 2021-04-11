#!/bin/bash

source ../util/logging.sh
source ../util/iterator.sh

source conf/peers.env
source conf/setup.env


function TestNode() {
    sleep 10

    curl -s http://localhost:8008/blocks
    sawtooth block list

    return 0
}

function RunDetachedProcess() {
    local process="${1}"

    echo "Starting process ${process}"
    nohup ${process} &> /dev/null &
    [[ $? -ne 0 ]] && $WarnMessage "Failed starting ${process}" && return 1

    local pid=$!
    echo ${pid} >> "${SAWTOOTH_PROCESSES}"

    return 0
}

function StartTransactionProcessor() {
    local transactionProcessor="${1}"

    RunDetachedProcess "sudo -u ${SAWTOOTH_USR} ${transactionProcessor} -v"
    return $?
}

function StartValidator() {
    local command="sudo -u ${SAWTOOTH_USR} sawtooth-validator"
    command="${command} --bind component:${VALIDATOR_COMPONENT_ENDPT}"
    command="${command} --bind network:${VALIDATOR_NETWORK_ENDPT}"
    command="${command} --bind consensus:${VALIDATOR_CONSENSUS_ENDPT}"
    command="${command} --endpoint ${VALIDATOR_PUBLIC_ENDPT}"
    command="${command} --peers ${PEERS_LIST}"

    RunDetachedProcess "${command}"
    return $?
}

function Main() {
    rm -f "${SAWTOOTH_PROCESSES}"

    if [[ ! "$(ls -A /var/lib/sawtooth/)" ]]; then
        $InfoMessage "Data directory empty, creating genesis block"
        ./create-genesis-block.sh
        [[ $? -ne 0 ]] && $ErrMessage "Failed creating genesis block" && return 1
    fi

    $InfoMessage "Starting Validator"
    StartValidator
    [[ $? -ne 0 ]] && $ErrMessage "Failed starting Validator" && return 1

    $InfoMessage "Starting REST API"
    RunDetachedProcess "sudo -u ${SAWTOOTH_USR} sawtooth-rest-api -v --bind http://$(hostname -I | cut -f 1 -d ' '):8080"
    [[ $? -ne 0 ]] && $ErrMessage "Failed starting REST API" && return 1

    $InfoMessage "Starting Transaction Processors"
    ForEachElement TRANSACTION_PROCESSORS StartTransactionProcessor
    [[ $? -ne 0 ]] && $ErrMessage "Failed starting transaction processors" && return 1

    $InfoMessage "Starting the Consensus Engine"
    RunDetachedProcess "sudo -u ${SAWTOOTH_USR} poet-engine -vv --connect tcp://$(hostname -I | cut -f 1 -d ' '):5050"
    [[ $? -ne 0 ]] && $ErrMessage "Failed starting transaction processors" && return 1

    $InfoMessage "Verifying this node is fully running"
    TestNode
    [[ $? -ne 0 ]] && $ErrMessage "Node verification failed" && return 1

    return $?
}

Main "$@"
exit $?
