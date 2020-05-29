import { NowRequest, NowResponse } from '@now/node'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const user = {
  id: 1,
  username: 'kissa',
  password: 'kissa'
}

export default (req: NowRequest, res: NowResponse) => {
  console.log(req.body)
  const { username, password } = req.body

  if (!username || !password) {
    res.statusCode = 401
    res.json({ error: 'invalid username or password' })

    return
  }

  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
