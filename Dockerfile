# DEPENDENCIES
FROM node:16-alpine as deps

WORKDIR /app

COPY package.json yarn.lock ./

COPY ./prisma ./prisma

RUN yarn install

RUN yarn prisma generate

# BUILDER
FROM deps as builder

WORKDIR /tmp

COPY --from=deps /app/node_modules ./node_modules

WORKDIR /app

COPY --from=deps /app/prisma ./prisma

COPY . .

COPY ./.env.development.example ./.env.development

# RUNNER
FROM builder as runner

WORKDIR /app

ENV NODE_ENV=development

COPY --from=builder /app ./

CMD ["sh", "-c", "\
    cp -r /tmp/node_modules /app/node_modules \
    && yarn dev \
"]