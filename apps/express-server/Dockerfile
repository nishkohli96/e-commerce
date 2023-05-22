# Base Image
FROM node:17-alpine3.14 as phase1

WORKDIR /app


# Run yarn only if package.json changes
COPY package.json .
COPY tsconfig.json .

# To prevent the "command tsc not found" issue
RUN npm i -g typescript rimraf ts-node

# first create these directories, else the copying won't work.
RUN mkdir -p apps/express-server

# copying only the required packages
COPY ./apps/express-server/package.json apps/express-server
COPY ./apps/express-server/tsconfig.json apps/express-server

COPY ./apps/express-server apps/express-server

# install node_modules
RUN npm install

# build server
RUN yarn express-server:build

# run the build
CMD ["yarn", "express-server:build-run"]
# CMD ["npx","ts-node","apps/express-server/build/index.js"]
# express-server:build-run
# express-server/build/index.js