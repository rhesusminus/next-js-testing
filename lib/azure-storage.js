// Promisify some of the azure-storage functions since Table isn't supported in whatever version is current at the moment

export async function queryEntities(tableService, ...args) {
  return new Promise((resolve, reject) => {
    let promiseHandling = (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    }
    args.push(promiseHandling)
    tableService.queryEntities.apply(tableService, args)
  })
}

// https://azure.github.io/azure-storage-node/TableService.html#insertEntity__anchor
export async function insertEntity(tableService, ...args) {
  return new Promise((resolve, reject) => {
    let promiseHandling = (err, res) => (err ? reject(err) : resolve(res))
    args.push(promiseHandling)
    tableService.insertEntity.apply(tableService, args)
  })
}

// https://azure.github.io/azure-storage-node/TableService.html#retrieveEntity__anchor
export async function retrieveEntity(tableService, ...args) {
  return new Promise((resolve, reject) => {
    let promiseHandling = (err, res) => (err ? reject(err) : resolve(res))
    args.push(promiseHandling)
    tableService.retrieveEntity.apply(tableService, args)
  })
}
