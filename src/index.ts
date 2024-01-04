import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient({
  datasourceUrl:"prisma://accelerate.prisma-data.net/?api_key=",
}).$extends(withAccelerate())
const app = new Hono()

app.get('/', (c) => {
  return c.json({ messagae: 'Hello Hono!' })
})

app.get('users', async (c) => {
  const users = await prisma.userx.findMany()
  return c.json({ users })
})

app.get(
  '/users/:id',
  async (c) => {
    const id = c.req.param('id');
    const user = await prisma.userx.findUnique({ where: { id: id } })
    return c.json({ user })
  }
)

app.post(
  '/users',
  async (c) => {
    const user = await c.req.json()
    const createdUser = await prisma.userx.create({ data: user })
    return c.json({ createdUser })
  }
)

app.delete('/users/:id', async (c) => {
  const id = c.req.param('id');
  const deletedUser = await prisma.userx.delete({ where: { id: id } })
  return c.json({ deletedUser })
})

app.get(
  '/posts',
  async (c) => {
    const posts = await prisma.post.findMany()
    return c.json({ posts })
  }
)

app.get(
  '/posts/:id',
  async (c) => {
    const id = c.req.param('id');
    const post = await prisma.post.findUnique({ where: { id: id } })
    return c.json({ post })
  }
)

app.post(
  '/posts',
  async (c) => {
    const post = await c.req.json()
    const createdPost = await prisma.post.create({ data: post })
    return c.json({ createdPost })
  }
)

app.delete('/posts/:id', async (c) => {
  const id = c.req.param('id');
  const deletedPost = await prisma.post.delete({ where: { id: id } })
  return c.json({ deletedPost })
})

export default app
