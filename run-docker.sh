#!/bin/bash

container_name="$(grep -v -e "^ *#" -e "^ *\t*$" container-name.txt)"

docker run -it -p 80:80 --rm --name ${container_name} ${container_name}
