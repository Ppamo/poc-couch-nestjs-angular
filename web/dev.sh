#!/bin/bash
APP=angulardev
IMAGE=angular:0.1.0

docker images --format '{{.Repository}}:{{.Tag}}' | grep "$IMAGE"
if [ $? -ne 0 ]; then
	docker build -t $IMAGE -f images/Dockerfile.dev images
fi

docker run -ti \
	--rm \
	--network host \
	--name $APP \
	--volume ${PWD}/src:/app \
	--publish 8080:4200 \
	--env SERVICES_HOST=lynch \
	--env SERVICES_PORT=3000 \
	$IMAGE bash
