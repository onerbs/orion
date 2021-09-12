FROM node:16.9.0-alpine3.14

ENV NODE_ENV=production

WORKDIR "/app"

COPY . .

RUN npm install

CMD [ "npm", "start" ]
