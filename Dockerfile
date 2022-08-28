FROM node:14 as base
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install && npm cache clean --force
COPY tsconfig.json ./
COPY src ./src
COPY .env ./env
COPY . .
EXPOSE ${PORT}
FROM base as production
RUN npm run build
ENV NODE_ENV=production