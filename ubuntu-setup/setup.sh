#!/bin/bash

set -xe

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 8AA7AF1F1091A5FD
sudo add-apt-repository 'deb [arch=amd64] http://repo.sawtooth.me/ubuntu/chime/stable bionic universe'
sudo apt-get update && sudo apt-get install -y sawtooth python3-sawtooth-*

dpkg -l '*sawtooth*'

sawtooth keygen my_key

sudo sawadm keygen
