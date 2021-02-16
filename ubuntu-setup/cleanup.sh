#!/bin/bash

function Main() {
    rm -rf /var/lib/sawtooth/* &&
    rm -rf /var/log/sawtooth/* &&
    rm -rf "${HOME}"/.sawtooth/keys/*{priv,pub} &&
    rm -rf /etc/sawtooth/keys/*{priv,pub}

    return $?
}

Main "$@"
exit $?
