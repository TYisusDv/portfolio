FROM node:current-alpine3.19
WORKDIR /app

RUN npm install -g create-react-app

EXPOSE 3000

CMD ["sh", "-c", "while :; do sleep 1; done"]