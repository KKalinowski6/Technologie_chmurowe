FROM node

WORKDIR /app

COPY backend.js .
COPY package.json .

RUN npm i

EXPOSE 8080

CMD ["node", "backend.js"]
