FROM node:16-alpine
COPY package*.json ./
RUN npm install

# Create app directory
WORKDIR /usr/src/tdd_kata
COPY . .
CMD [ "npm", "test"]