# import alpine 3.12 with node 14.7
FROM node:14.7-alpine3.12
# expose ports 80 http and 443 https
EXPOSE 80 443
# directory where command are launched
WORKDIR /app
# install app for node modules
RUN apk add python3 make g++
# copy package*.json to container for installing modules before app is copied 
COPY ./package*.json /app/
# install package register in package*.json
RUN npm install
# copy full app
COPY . /app/
# launch app with nodemon on debug mode 
ENTRYPOINT [ "npm" ]
CMD [ "run", "debug" ]
