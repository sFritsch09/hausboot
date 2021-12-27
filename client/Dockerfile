# Name the node stage "builder"
FROM node:14.15.3-alpine as builder

RUN apt-get update && apt-get install -y \
    python-pip

# install package
RUN pip install pipenv && pipenv sync

RUN --mount=type=secret,id=REACT_APP_GOOGLE_API_KEY \
    --mount=type=secret,id=REACT_APP_GOOGLE_CALENDAR_ID \
    export REACT_APP_GOOGLE_API_KEY=$(cat run/secrets/REACT_APP_GOOGLE_API_KEY) && \
    export REACT_APP_GOOGLE_CALENDAR_ID=$(cat run/secrets/REACT_APP_GOOGLE_CALENDAR_ID) && \
    python genenv.py

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
