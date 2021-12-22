# Name the node stage "builder"
FROM node:14.15.3-alpine as builder
# Set working directory
ARG REACT_APP_GOOGLE_API_KEY
ENV REACT_APP_GOOGLE_API_KEY=$REACT_APP_GOOGLE_API_KEY
WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . .

RUN yarn run build

#RUN export REACT_APP_GOOGLE_API_KEY=$(cat /run/secrets/REACT_APP_GOOGLE_API_KEY)

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
