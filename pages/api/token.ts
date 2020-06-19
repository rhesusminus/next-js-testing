import { NowRequest, NowResponse } from '@now/node'
import azure from 'azure-storage'
import { verifyToken } from 'lib/token'
import { retrieveEntity } from 'lib/azure-storage'

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed')
  }

  const refreshToken = req.headers.cookie.split('=')[1]

  if (!refreshToken) {
    return res.status(401).send({})
  }

  const tableSvc = azure.createTableService(process.env.AZURE_STORAGE_ACCOUNT, process.env.AZURE_STORAGE_ACCESS_KEY)

  const isActiveRefreshToken = tableSvc.retrieveEntity(
    'refreshTokens',
    'refreshToken',
    refreshToken,
    (error, result) => {
      if (!error) {
        return result
      }

      return null
    }
  )
  retrieveEntity(tableSvc, 'refreshTokens', 'refreshToken', refreshToken)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => console.log('error:', err))

  /*
  console.log(isActiveRefreshToken)

  if (isActiveRefreshToken === null) {
    return res.status(401)
  }

  try {
    const user = verifyToken(refreshToken)
    return res.status(200).send('ok')
  } catch (error) {
    return res.status(403).send('')
  }
  */
}
