# pull the Node.js Docker image
FROM node:14.5.0-alpine

ARG GOOGLE_CALENDAR_ID
ENV GOOGLE_CALENDAR_ID=$GOOGLE_CALENDAR_ID

ARG SERVICE
ADD $SERVICE .
# create the directory inside the container
WORKDIR /app

# copy the package.json files from local machine to the workdir in container
COPY package*.json ./

# run npm install in our local machine
RUN npm install


# copy the generated modules and all other files to the container
COPY . .

# our app is running on port 5000 within the container, so need to expose it
EXPOSE 3100

# the command that starts our app
CMD ["node", "server.js"]