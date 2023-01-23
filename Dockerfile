FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/ .

COPY tsconfig.json .

COPY .env.example .env

COPY startup.sh .

COPY prisma/ .

RUN npx prisma generate

COPY api-spec.yml .

COPY src/ .

RUN npx tsc

CMD [ "sh", "startup.sh" ]
