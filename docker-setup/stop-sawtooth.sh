#!/bin/bash

source conf/sh.env


docker-compose --env-file "./conf/peers.env" -f "${DOCKER_CPS_FILE}" down
