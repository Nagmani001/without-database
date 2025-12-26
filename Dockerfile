FROM node:alpine

WORKDIR /usr/home/

RUN npm install -g pnpm

COPY package*.json . 

RUN pnpm install 

COPY . . 

EXPOSE 8000

CMD [ "pnpm" , "dev" ]


