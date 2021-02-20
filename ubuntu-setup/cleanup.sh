#!/bin/bash

function Main() {
    rm -rf /var/lib/sawtooth/* &&
        rm -rf /var/log/sawtooth/*

    if [[ "${1}" == "keys" ]]; then
        rm -rf "${HOME}"/.sawtooth/keys/*{priv,pub} &&
            rm -rf /etc/sawtooth/keys/*{priv,pub}
    fi

    return $?
}

Main "$@"
exit $?
