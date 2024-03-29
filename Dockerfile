FROM node:17-alpine3.14

RUN mkdir /app
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

EXPOSE 3000
EXPOSE 3001

CMD ["npm", "start"]