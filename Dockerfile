FROM node:lts-alpine3.10 AS node-for-build
RUN mkdir app
WORKDIR /app
COPY . .
RUN npm install && npm run build

EXPOSE 3000 
CMD ["npm", "start"]