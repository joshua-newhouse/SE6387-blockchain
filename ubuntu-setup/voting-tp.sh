#!/bin/bash

export THIS_IP_ADDR="$(hostname -I | cut -f 1 -d ' ')"

java -D"validator_host_port=${THIS_IP_ADDR}:4004" \
    -jar transaction-processor/voting-transaction-processor-0.1.0-SNAPSHOT.jar
