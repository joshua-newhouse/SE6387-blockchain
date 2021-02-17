#!/bin/bash

source ../util/logging.sh

source conf/setup.env

function SignalProcesses() {
    local signal="${1}"

    while read -r pid; do
        echo "Signalling ${pid}"

        local pgid=$(ps opgid= "${pid}" | tr -d ' ')
        [[ "${pgid}" ]] && sudo kill "${signal}" -"${pgid}"
    done < "${SAWTOOTH_PROCESSES}"
}

function Main() {
    $InfoMessage "Gracefully terminating processes"
    SignalProcesses --

    local waitTimeSeconds=15
    $InfoMessage "Waiting ${waitTimeSeconds} seconds for processes to terminate"
    sleep ${waitTimeSeconds}

    $InfoMessage "Forcefully terminating remaining processes"
    SignalProcesses -9

    return 0
}

Main "$@"
exit $?
