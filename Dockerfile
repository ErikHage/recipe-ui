# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH \
    HOME /app

# install and cache app dependencies
COPY ./package.json ${HOME}/package.json

RUN npm install --loglevel info

# copy source code
COPY ./public ${HOME}/public
COPY ./src ${HOME}/src

RUN npm prune --production

# start app
CMD ["npm", "start"]