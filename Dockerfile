# Dockerfile

# base image
FROM node:slim

# create & set working directory
RUN mkdir -p /usr/watchselepro
WORKDIR /usr/watchselepro

ENV PORT = 3000

# copy source files
COPY . /usr/watchselepro

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3000
CMD npm run start
