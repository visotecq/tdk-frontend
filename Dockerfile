# Fetching the latest node image on alpine linux
FROM node:alpine AS development

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /TDK-FRONTEND

# Installing dependencies
COPY ./package*.json /TDK-FRONTEND

RUN npm install

# Copying all the files in our project
COPY . .

# Starting our application
CMD ["npm","start"]