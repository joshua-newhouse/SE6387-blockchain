#!/bin/bash

source ../util/logging.sh

source conf/setup.env


function Main() {
    $InfoMessage "Gracefully terminating processes"
    while read -r pid; do
        echo "Stopping ${pid}"
        sudo kill "${pid}"
    done < "${SAWTOOTH_PROCESSES}"

    local waitTimeSeconds=15
    $InfoMessage "Waiting ${waitTimeSeconds} seconds for processes to terminate"
    sleep ${waitTimeSeconds}

    $InfoMessage "Forcefully terminating remaining processes"
    while read -r pid; do
        sudo kill -9 "${pid}" 2 > /dev/null
    done < "${SAWTOOTH_PROCESSES}"

    return 0
}

Main "$@"
exit $?
