#!/bin/bash
# Check if repo can skip prepush hook.


REPO_NAME=$(basename `git rev-parse --show-toplevel`)

if [[ $REPO_NAME = component ]]; then
	echo 'Skipping prepush hook...\n';
	exit 0
fi
