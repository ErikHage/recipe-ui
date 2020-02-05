FROM node:12.2.0-alpine as build

ENV HOME=/app \
    PATH=/app/node_modules/.bin:$PATH

WORKDIR ${HOME}

COPY ./package.json ${HOME}/package.json

RUN npm i --loglevel info
RUN npm i react-scripts@3.0.1 -g --loglevel info

COPY . /app

CMD ["npm", "start"]