#!/bin/bash
APP=couchdev
IMAGE=couchdb:3.2.2

docker run -ti \
	--rm \
	--name $APP \
	--volume ${PWD}/data:/opt/couchdb/data \
	--publish 5984:5984 \
	--env COUCHDB_USER=admin \
	--env COUCHDB_PASSWORD=AdminPass1 \
	$IMAGE
