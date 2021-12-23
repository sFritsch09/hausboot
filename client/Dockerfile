# Name the node stage "builder"
FROM node:14.15.3-alpine as builder
# Set working directory
WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . .

RUN yarn run build

RUN --mount=type=secret,id=client_env \
    export client_env=$(cat /run/secrets/client_env)

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
