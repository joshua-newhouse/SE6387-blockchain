#!/bin/bash

source ../util/logging.sh
source ../util/iterator.sh

source conf/setup.env


function SetupKeys() {
    local usrKey="${1}"

    $InfoMessage "Generating keys"
    sawtooth keygen --force "${usrKey}" &&
        sudo sawadm keygen --force
    [[ $? -ne 0 ]] && $WarnMessage "Failed generating keys" && return 1

    $InfoMessage "Renaming pem files"
    for pem in /etc/sawtooth/*.pem.dpkg-new; do
        mv "${pem}" "${pem/.dpkg-new/}"
        [[ $? -ne 0 ]] && $WarnMessage "Failed renaming ${pem}"
    done

    return 0
}

function Chown() {
    local dir="${1}"
    local usr="${2}"
    local grp="${3}"

    sudo chown -R "${usr}:${grp}" "${dir}"
}

function SetupPermissions() {
    $InfoMessage "Adjusting directory ownership"
    ForEachElement SAWTOOTH_DIRS Chown "${SAWTOOTH_USR}" "${SAWTOOTH_GRP}"
    [[ $? -ne 0 ]] && $WarnMessage "Failed adjusting directory ownership" && return 1

    return 0
}

function InstallSawtooth() {
    $InfoMessage "Setting up repository"
    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 8AA7AF1F1091A5FD &&
        sudo add-apt-repository 'deb [arch=amd64] http://repo.sawtooth.me/ubuntu/chime/stable bionic universe' &&
        sudo apt-get update
    [[ $? -ne 0 ]] && $WarnMessage "Failed setting up repository" && return 1

    $InfoMessage "Installing required packages"
    sudo apt-get install -y ${REQUIRED_PKGS}
    [[ $? -ne 0 ]] && $WarnMessage "Failed installing some packages"

    return 0
}

function Main() {
    $InfoMessage "Installing Sawtooth"
    InstallSawtooth

    dpkg -l '*sawtooth*'

    $InfoMessage "Creating Sawtooth home directory ${SAWTOOTH_HOME}"
    mkdir -p "${SAWTOOTH_HOME}"
    [[ $? -ne 0 ]] && $ErrMessage "Failed creating ${SAWTOOTH_HOME}" && return 1

    $InfoMessage "Setting up permissions"
    SetupPermissions
    [[ $? -ne 0 ]] && $ErrMessage "Failed setting up permissions" && return 1

    $InfoMessage "Setting up keys"
    SetupKeys "${SAWTOOTH_USR_KEY}"
    [[ $? -ne 0 ]] && $ErrMessage "Failed setting up keys" && return 1

    return 0
}

Main "$@"
exit $?
