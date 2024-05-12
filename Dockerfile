FROM node:20.10.0-alpine
WORKDIR app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node","index.js"]
