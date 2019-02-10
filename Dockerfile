FROM mhart/alpine-node:11

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

RUN apk update && apk add bash && rm -rf /var/cache/apk/*

WORKDIR /app
COPY . /app

# Set variables needed for building
ENV NODE_ENV=production
ENV GA_ID=UA-68649021-1

RUN yarn
RUN npm run build

EXPOSE 7999
EXPOSE 27017
