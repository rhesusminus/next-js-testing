import { NowRequest, NowResponse } from '@now/node'
import { serialize } from 'cookie'
import azure from 'azure-storage'
import { createJwtToken, createRefreshToken } from 'lib/token'
import { insertEntity } from 'lib/azure-storage'

const user = {
  id: 1,
  username: 'kissa',
  password: 'kissa'
}

export type User = typeof user

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed')
  }

  const { username, password } = req.body
  const tableSvc = azure.createTableService(process.env.AZURE_STORAGE_ACCOUNT, process.env.AZURE_STORAGE_ACCESS_KEY)

  if (!username || !password) {
    return res.status(401).json({ error: 'invalid username or password' })
  }

  if (username !== user.username || password !== user.password) {
    return res.status(401).json({ error: 'invalid username or password' })
  }

  const refreshToken = createRefreshToken(user)
  const entGen = azure.TableUtilities.entityGenerator
  const token = {
    PartitionKey: entGen.String('refreshToken'),
    RowKey: entGen.String(refreshToken)
  }

  insertEntity(tableSvc, 'refreshTokens', token)
    .then(() => {
      res.status(200).setHeader('Set-Cookie', serialize('refresh-token', refreshToken, { httpOnly: true }))
      return res.json({ token: createJwtToken(user) })
    })
    .catch(() => {
      return res.status(500).send('Something went wrong')
    })
}
