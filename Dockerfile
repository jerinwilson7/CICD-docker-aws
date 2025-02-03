#Build stage
FROM node:20-alpine AS build

ARG PORT=8080

ENV PORT=${PORT}

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

#Production stage
FROM node:20-alpine AS production

WORKDIR /app

ARG PORT=8080

ENV PORT=${PORT}

COPY package*.json .

RUN npm ci --only=production

COPY --from=build /app/build ./build

EXPOSE $PORT
CMD ["node", "build/app.js"]