## base image
#FROM node:12.2.0-alpine
#
## add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH \
#    HOME /app
#
## set working directory
#WORKDIR ${HOME}
#
## install and cache app dependencies
#COPY ./package.json ${HOME}/package.json
#
#RUN npm install --loglevel info
#
## copy source code
#COPY ./public ${HOME}/public
#COPY ./src ${HOME}/src
#
#RUN npm prune --production
#
## start app
#CMD ["npm", "start"]

FROM node:12.2.0-alpine as build

ENV HOME=/app \
    PATH=/app/node_modules/.bin:$PATH

WORKDIR ${HOME}

COPY ./package.json ${HOME}/package.json

RUN npm i --loglevel info
RUN npm i react-scripts@3.0.1 -g --loglevel info

COPY . /app

CMD ["npm", "start"]