# Node
FROM node:14.15.3-alpine as builder

ARG REACT_APP_GOOGLE_API_KEY
ARG REACT_APP_USERNAME
ARG REACT_APP_PASSWORD
ARG REACT_APP_PAYPAL_ID

ENV REACT_APP_GOOGLE_API_KEY=$REACT_APP_GOOGLE_API_KEY
ENV REACT_APP_USERNAME=$REACT_APP_USERNAME
ENV REACT_APP_PASSWORD=$REACT_APP_PASSWORD
ENV REACT_APP_PAYPAL_ID=$REACT_APP_PAYPAL_ID

# Set working directory
WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . .

RUN yarn run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
