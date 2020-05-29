import { NowRequest, NowResponse } from '@now/node'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req: NowRequest, res: NowResponse) => {
  res.statusCode = 200
  res.json({ name: 'test' })
}
