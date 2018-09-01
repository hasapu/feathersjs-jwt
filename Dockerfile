## Specifies the base image we're extending
FROM node:8.11.3-alpine

## Make dir volumes
RUN mkdir /app

## Add all package to installing
ADD ./package.json /app/package.json
ADD ./package-lock.json /app/package-lock.json
RUN npm install --silent

## Add all data to docker
ADD . /app
WORKDIR /app
EXPOSE 3000
