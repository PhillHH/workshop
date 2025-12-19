@echo off
set IMAGE_NAME=workshop_landing
set CONTAINER_NAME=workshop_landing_container
set PORT=8026

echo Building Docker image: %IMAGE_NAME%...
docker build -t %IMAGE_NAME% .

echo Stopping existing container (if any)...
docker stop %CONTAINER_NAME% >nul 2>&1

echo Removing existing container (if any)...
docker rm %CONTAINER_NAME% >nul 2>&1

echo Starting new container on port %PORT%...
docker run -d -p %PORT%:80 --name %CONTAINER_NAME% %IMAGE_NAME%

echo Application started successfully!
echo Access it at http://localhost:%PORT%
pause
