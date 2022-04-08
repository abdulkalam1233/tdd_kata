FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/tdd_kata
COPY . .
CMD [ "node", "test.js" ]