#!/bin/bash

# Define image and container names
IMAGE_NAME="workshop_landing"
CONTAINER_NAME="workshop_landing_container"
PORT=8026

echo "Building Docker image: $IMAGE_NAME..."
docker build -t $IMAGE_NAME .

echo "Stopping existing container (if any)..."
docker stop $CONTAINER_NAME 2>/dev/null || true

echo "Removing existing container (if any)..."
docker rm $CONTAINER_NAME 2>/dev/null || true

echo "Starting new container on port $PORT..."
docker run -d -p $PORT:80 --name $CONTAINER_NAME $IMAGE_NAME

echo "Application started successfully!"
echo "Access it at http://localhost:$PORT"
