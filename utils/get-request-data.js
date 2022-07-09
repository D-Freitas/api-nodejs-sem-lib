let body = ''

function getRequestData (request) {
  return new Promise((resolve, reject) => {
    try {
      request.on('data', dataAssembler)
      request.on('end', () => {
        resolve(body.toString())
        cleanData()
      })
    } catch (error) {
      reject(error)
    }
  })
}

function dataAssembler (chunk) {
  body += chunk
}

function cleanData () {
  body = ''
}

module.exports = { getRequestData }