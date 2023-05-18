FROM node

WORKDIR /app

COPY package.json .
RUN npm install
COPY index.js .
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD curl -fs http://localhost:3000/ || exit 1

CMD ["npm", "start"]
