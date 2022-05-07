FROM mongo:latest
COPY ./init/data.json /data.json
CMD mongoimport --uri "mongodb://root:root@mongodb:27017/mern?authSource=admin" --collection restaurants --type json --drop --file /data.json --jsonArray
