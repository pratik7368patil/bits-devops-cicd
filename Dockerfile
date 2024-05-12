FROM node:20.10.0-alpine
WORKDIR app
COPY . .
RUN npm install
RUN npm run start
EXPOSE 3000
CMD ["nodemon","index.js"]