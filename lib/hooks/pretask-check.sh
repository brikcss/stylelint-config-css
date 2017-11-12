#!/bin/bash
# Check if the next command should be run.


REPO_NAME=$(basename `git rev-parse --show-toplevel`)

if [[ $REPO_NAME = component ]]; then
	echo "Skipping $1...";
	exit 0
fi
