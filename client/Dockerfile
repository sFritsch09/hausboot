# Name the node stage "builder"
FROM node:14.15.3-alpine as builder

RUN --mount=type=secret,id=REACT_APP_GOOGLE_API_KEY \
    --mount=type=secret,id=REACT_APP_GOOGLE_CALENDAR_ID \
    export key1=$(run/secrets/REACT_APP_GOOGLE_API_KEY) && \
    export key2=$(run/secrets/REACT_APP_GOOGLE_CALENDAR_ID)

RUN -e REACT_APP_GOOGLE_API_KEY=$key1 \
    -e REACT_APP_GOOGLE_CALENDAR_ID=$key2

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
