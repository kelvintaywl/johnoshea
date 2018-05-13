FROM node:8.11-alpine

WORKDIR /var/www/bin

COPY . .

RUN yarn install --production -s

CMD [ "yarn", "start" ]
