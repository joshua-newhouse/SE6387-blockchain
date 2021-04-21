#!/bin/bash

source ../util/logging.sh
source ../util/iterator.sh

declare START_SERVICES_ORDER=(
    "sawtooth-validator"
    "sawtooth-rest-api"
    "sawtooth-devmode-engine-rust"
    "sawtooth-settings-tp"
    "sawtooth-intkey-tp-python"
)

declare STOP_SERVICES_ORDER=(
    "sawtooth-intkey-tp-python"
    "sawtooth-settings-tp"
    "sawtooth-devmode-engine-rust"
    "sawtooth-rest-api"
    "sawtooth-validator"
)

function ControlService() {
    local service="${1}"
    local command="${2}"

    sudo systemctl "${command}" "${service}.service"
    [[ $? -ne 0 ]] && $ErrMessage "Failed ${command}ing ${service}" && return 1

    return 0
}
function Main() {
    local command="${1}"

    local retCode=0

    case "${command}" in
        start)
            $InfoMessage "Starting Sawtooth services"

            ForEachElement START_SERVICES_ORDER ControlService "${command}"
            retCode=$?

            systemctl status sawtooth-*
            sawtooth settings list
            ;;
        stop)
            $InfoMessage "Stopping Sawtooth services"

            ForEachElement STOP_SERVICES_ORDER ControlService "${command}"
            retCode=$?

            sudo systemctl reset-failed sawtooth-*.service
            systemctl status sawtooth-*
            ;;
        restart)
            $InfoMessage "Restarting Sawtooth services"

            ForEachElement START_SERVICES_ORDER ControlService "${command}"
            retCode=$?

            systemctl status sawtooth-*
            ;;
        *)
            $ErrMessage "Unknown command ${command}.  Known commands: start stop restart"
            retCode=1
    esac

    return "${retCode}"
}

Main "$@"
exit $?
