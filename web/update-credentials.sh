#!/usr/bin/env bash

dir=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

while getopts u:p: flag
do
    case "${flag}" in
        u) username=${OPTARG};;
        p) password=${OPTARG};;
    esac
done

if [ -z "$username" ] || [ -z "$password" ]
then
  echo "Please provide a username and a password"
  exit 1
fi

sed -i "s/WP_USERNAME=$/WP_USERNAME=$username/" $dir/.env.local
sed -i "s/WP_PASSWORD=$/WP_PASSWORD=$password/" $dir/.env.local

docker-compose cp $dir/.env.local next:/app/landingpage/.env.local

echo "Done!"

exit 0
