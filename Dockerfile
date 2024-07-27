FROM oven/bun:canary-debian

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install

COPY . .

EXPOSE 3000

CMD [ "bun", "index.ts" ]
