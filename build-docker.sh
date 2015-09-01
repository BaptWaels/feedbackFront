#!/bin/bash

container_name="$(grep -v -e "^ *#" -e "^ *\t*$" container-name.txt)"

docker build --file="Dockerfile" -t ${container_name} .
