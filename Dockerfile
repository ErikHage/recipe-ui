# build environment
FROM node:12.14.1-alpine as build

ENV HOME=/app

ENV PATH=${HOME}/node_modules/.bin:$PATH

WORKDIR ${HOME}

COPY package.json ${HOME}/package.json

RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent

COPY . /app

RUN npm run build

# production environment
FROM nginx:1.16.0-alpine

ENV HOME=/app

COPY --from=build ${HOME}/build /usr/share/nginx/html/recipes

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]