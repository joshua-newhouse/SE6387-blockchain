#!/bin/bash

SSH_PORT=1913
HOSTNAME=bigdata@localhost
REMOTE_DIR=/home/bigdata/sawtooth

if [[ "${1}" == "pull" ]]; then
    scp -r -P ${SSH_PORT} ${HOSTNAME}:${REMOTE_DIR}/* .
    [[ $? -ne 0 ]] && echo "Failed pulling updates" && exit 1
else
    scp -P ${SSH_PORT} ./*sawtooth* ${HOSTNAME}:${REMOTE_DIR}/
    [[ $? -ne 0 ]] && echo "Failed pushing updates" && exit 1
fi

exit 0
