FROM node:latest
ENV NODE_ENV=development
RUN RUN npm config set strict-ssl false
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT ["npm","run","dev"]
EXPOSE 3000