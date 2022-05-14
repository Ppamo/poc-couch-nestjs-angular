#!/bin/bash
APP=nestdev
IMAGE=nestcli:0.1.0

docker images --format '{{.Repository}}:{{.Tag}}' | grep "$IMAGE"
if [ $? -ne 0 ]; then
	docker build -t $IMAGE -f images/Dockerfile.dev images/
fi

docker run -ti \
	--rm \
	--name $APP \
	--volume ${PWD}/src:/app \
	--publish 3000:3000 \
	--env COUCHDB_HOST=localhost \
	--env COUCHDB_PORT=5984 \
	--env COUCHDB_USER=admin \
	--env COUCHDB_PASSWORD=AdminPass1 \
	$IMAGE bash
