ssh_host=172.30.12.26
ssh_user=offerdev
ssh_path=/home/offerdev/
container_name=feedbackfront

#save container
docker save ${container_name} | gzip > ${container_name}.tar.gz

#send it to TV
scp ${container_name}.tar.gz ${ssh_user}@${ssh_host}:${ssh_path}

#load it on TV
ssh ${ssh_user}@${ssh_host} "cd ${ssh_path} && docker load --input ${container_name}.tar.gz && rm ${container_name}.tar.gz"
rm ${container_name}.tar.gz
