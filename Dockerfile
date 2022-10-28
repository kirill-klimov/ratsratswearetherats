FROM node:16

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm run build

ENV PORT=2082

EXPOSE 2082

CMD [ "npm", "start" ]