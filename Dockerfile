FROM node:6.9.1

MAINTAINER Lukasz Karbownik <lukaszkarbownik@gmail.com>

ADD . /app/
WORKDIR /app
RUN npm install

ENTRYPOINT ["npm", "run"]
CMD ["dev"]
