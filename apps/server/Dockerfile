# Base Image
FROM node:17-alpine3.14 as phase1

WORKDIR /app

# To prevent the "command tsc not found" issue
# RUN npm i -g typescript rimraf

# Run yarn only if package.json changes
COPY package.json .

# first create these directories, else the copying won't work.
RUN mkdir -p apps/server

# copying only the required packages
COPY ./apps/server/package.json apps/server
COPY ./apps/server apps/server

# install node_modules
RUN npm install

# build server
RUN yarn server:build

# run the build
CMD ["node", "apps/server/dist/main.js"]