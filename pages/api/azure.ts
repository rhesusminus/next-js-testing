import { NowRequest, NowResponse } from '@now/node'
import azure from 'azure-storage'

export default (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed')
  }

  const tableSvc = azure.createTableService(process.env.AZURE_STORAGE_ACCOUNT, process.env.AZURE_STORAGE_ACCESS_KEY)
  tableSvc.createTableIfNotExists('mytable', function (error, result, response) {
    if (!error) {
      console.log('nadasd')
    }
  })
  res.status(200).send('hello world')
}
