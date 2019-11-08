# import alpine with node 12.13.*
FROM node:12.13-alpine
# expose ports 80 http and 443 https
EXPOSE 80 443
# directory where command are launched
WORKDIR /app
# copy package*.json to container for installing modules before app is copied 
COPY ./package*.json /app/
# install package register in package*.json
RUN npm install
# copy full app
COPY . /app/
# launch app with nodemon on debug mode
ENTRYPOINT [ "npm" ]
CMD [ "run", "debug" ]
