FROM mhart/alpine-node:11

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

RUN apk update && apk add bash && rm -rf /var/cache/apk/*

WORKDIR /app
COPY . /app

RUN yarn
RUN npm run build

EXPOSE 7999
