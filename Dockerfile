FROM node:18 as base
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install && npm cache clean --force
COPY tsconfig.json ./
COPY src ./src
COPY .env ./env
COPY . .
EXPOSE ${PORT}
FROM base as production
ENV NODE_ENV=production
RUN npm run build