#!/bin/bash

source util/logging.sh

function StartNode() {
    local nodeID=${1}

    for envFile in ./conf/*.env; do
        docker-compose --env-file "${envFile}" -f sawtooth-default-poet.yaml up -d
        [[ $? -ne 0 ]] && $WarnMessage "Failed bringing up node configured in ${envFile}"
    done
}

function Main() {
    docker-compose -f sawtooth-default-poet.yaml up -d
    [[ $? -ne 0 ]] && $ErrMessage "Error starting Sawtooth network" && exit 1

    docker exec -t sawtooth-rest-api-default-0 sh -c "ps --pid 1 fw"
    [[ $? -ne 0 ]] && $ErrMessage "Error verifying REST API" && exit 1

    docker exec -t sawtooth-shell-default \
        sh -c "curl http://sawtooth-rest-api-default-0:8008/peers"
    [[ $? -ne 0 ]] && $ErrMessage "Error confirming network functionality" && exit 1

    docker exec -t sawtooth-shell-default \
        sh -c "sawtooth peer list --url http://sawtooth-rest-api-default-0:8008"

    docker exec -t sawtooth-shell-default \
        sh -c "sawnet peers list http://sawtooth-rest-api-default-0:8008"

    docker exec -t sawtooth-validator-default-0 \
        sh -c "sawset proposal create " \
        "--url http://sawtooth-rest-api-default-0:8008 --key /etc/sawtooth/keys/validator.priv " \
        "sawtooth.validator.transaction_families='[" \
        "{\"family\": \"intkey\", \"version\": \"1.0\"}, " \
        "{\"family\":\"sawtooth_settings\", \"version\":\"1.0\"}, " \
        "{\"family\":\"xo\", \"version\":\"1.0\"}, " \
        "{\"family\":\"sawtooth_validator_registry\", \"version\":\"1.0\"}" \
        "]'"

    docker exec -t sawtooth-shell-default \
        sh -c "sawtooth settings list --url http://sawtooth-rest-api-default-0:8008"
}

Main "$@"
