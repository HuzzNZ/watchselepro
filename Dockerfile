# Dockerfile

# base image
FROM node:alpine

# create & set working directory
RUN mkdir -p /usr/watchselepro
WORKDIR /usr/watchselepro

# set port environment variable
ENV PORT = 3000

# install pm2
RUN npm install --global pm2

# copy source files
COPY . /usr/watchselepro

# install dependencies
RUN npm install

# build app
RUN npm run build

# expose port
EXPOSE 3000

USER node

# start app with pm2
CMD [ "pm2-runtime", "npm", "--", "run", "start" ]
