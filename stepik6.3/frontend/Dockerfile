FROM node

WORKDIR /app

COPY frontend.js .
COPY package.json .
COPY public .

RUN npm i

EXPOSE 3000

CMD ["node", "frontend.js"]
