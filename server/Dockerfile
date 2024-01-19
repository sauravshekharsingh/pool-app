FROM node:20 as base

WORKDIR /app

COPY package.json package-lock.json /app

RUN npm i

COPY . /app