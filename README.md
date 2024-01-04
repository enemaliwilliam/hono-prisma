# Hono Prisma Example

This example shows how to use hono with prisma accelerate so that it can be deployed with cloudflare workers, vercel edge functions and deno deploy


## Install
- Go to [Accelerate](https://www.prisma.io/data-platform/accelerate) and create a project.
- Add your db connection and grab an API key
- Update the `index.ts` with api key


## Run
- Run `npx prisma generate --no-engine` to update prisma schema
```
npm install
npm run dev
```
## Deploy
```
npm run deploy
```
