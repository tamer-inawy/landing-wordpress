
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

sed -i "s/WP_USERNAME=/WP_USERNAME=$username/" .env.local
sed -i "s/WP_PASSWORD=/WP_PASSWORD=$password/" .env.local

docker-compose cp ./.env.local next:/app/landingpage/.env.local
