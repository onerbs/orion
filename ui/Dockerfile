FROM node:16.9.0-alpine3.14 as builder

WORKDIR "/app"

COPY . .

RUN npm install

RUN npm run build



FROM nginx

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html
