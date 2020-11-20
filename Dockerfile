FROM node:15.2.1-alpine3.10
# install simple http server for serving static content
RUN npm install -g http-server
WORKDIR .
# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./
# install project dependencies
RUN npm install
# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .
# build app for production with minification
RUN npm run build
EXPOSE 80
CMD [ "http-server", "dist" ]