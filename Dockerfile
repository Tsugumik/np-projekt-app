FROM node:21

ENV NODE_ENV production
ENV PORT 3100

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "prisma", "/usr/src/app/"]

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3100

CMD npx prisma db push; npx prisma migrate deploy; node build