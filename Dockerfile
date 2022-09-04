# STAGE 1

FROM node:alpine AS build

WORKDIR /app

RUN npm install i npm@latest -g

COPY package*.json ../app/

RUN npm i

COPY . .

RUN npm run build

# STAGE 2

FROM nginx:stable-alpine

WORKDIR /app

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]