FROM node:12.14.0-alpine3.9

RUN apk update && apk add --no-cache \
  openssh \
  git \
  make \
  build-base \
  curl

ENV HOME=/home

COPY package.json yarn.lock $HOME/app/

WORKDIR $HOME/app/

RUN yarn && yarn cache clean

EXPOSE 3333 9229

CMD ["yarn", "dev:server"]
