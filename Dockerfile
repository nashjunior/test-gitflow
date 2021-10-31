FROM node:lts-alpine3.11

workdir /app

COPY . .

RUN yarn

CMD [ "yarn", "dev" ]