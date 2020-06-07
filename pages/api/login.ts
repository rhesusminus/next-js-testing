import { NowRequest, NowResponse } from '@now/node'
import { createJwtToken } from 'lib/token'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const user = {
  id: 1,
  username: 'kissa',
  password: 'kissa'
}

export type User = typeof user

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method === 'POST') {
    const { username, password } = req.body

    if (!username || !password) {
      res.status(401).json({ error: 'invalid username or password' })

      return
    }

    if (username !== user.username || password !== user.password) {
      res.status(401).json({ error: 'invalid username or password' })

      return
    }

    res.status(200).json({ token: createJwtToken(user) })
  }
}
