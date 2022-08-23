FROM node:alpine

EXPOSE 4000

WORKDIR /app

RUN npm install i npm@latest -g

COPY package*.json ../app/

RUN npm i

COPY . .

CMD npm start