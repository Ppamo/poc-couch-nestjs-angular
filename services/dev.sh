#!/bin/bash
APP=nestdev
IMAGE=nestcli:0.1.0

docker images --format '{{.Repository}}:{{.Tag}}' | grep "$IMAGE"
if [ $? -ne 0 ]; then
	docker build -t $IMAGE -f Dockerfile.dev .
fi

docker run -ti \
	--rm \
	--net host \
	--name $APP \
	--volume ${PWD}/src:/app \
	--publish 3000:3000 \
	--env COUCHDB_HOST=lynch \
	--env COUCHDB_PORT=5984 \
	--env COUCHDB_USER=admin \
	--env COUCHDB_PASSWORD=AdminPass1 \
	$IMAGE bash
