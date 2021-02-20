# Sawtooth Automation

## Configuration
1. conf/peers.env - Per node configuration of the initial peers to attempt to connect to.
2. conf/setup.env - Standardized settings used for installation, startup, and shutdown of a node instance.

The following instructions are to get a single Sawtooth node setup.  In order to set up an entire Sawtooth network you
must repeat the steps for each node.

## Prerequisites
1. A machine running Ubuntu Server 18.04 LTS which will be the Sawtooth node.
2. Create a sawtooth user on this machine.
3. Clone this repository on the node.

## Installation
1. Edit the setup.env file if necessary.
2. Execute the setup.sh script; enter sudo credentials as prompted.

## Run Sawtooth
1. Edit the peers.env file to specify the seed peers this node should contact.
2. Execute the start.sh script; enter sudo credentials as prompted.

## Stop Sawtooth
1. Execute the stop.sh script

## Clean up
In order to reset this node to a clean state you may want to delete the existing data, logs, and keys.
1. Execute the cleanup.sh script
   This will delete the data and logs.
   Give "keys" as the first command line argument to also delete the public/private signing keys.
