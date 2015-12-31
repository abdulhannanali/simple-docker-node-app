FROM node:latest

RUN mkdir /src
COPY package.json /src/package.json
WORKDIR /src
RUN npm install
COPY src/ /src

EXPOSE 3000
CMD ["node", "src/index.js"]
