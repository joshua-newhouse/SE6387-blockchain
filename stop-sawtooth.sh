#!/bin/bash

source conf/peers.env

docker-compose -f "${DOCKER_CPS_FILE}" down

