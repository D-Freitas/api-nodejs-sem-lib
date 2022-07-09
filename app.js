const http = require('http')
const { routes } = require('./routes/users-route.js')

const server = http.createServer((request, response) => {
  const { url, method } = request
  const called = `${url}:${method}`.toLowerCase()
  const requestParams = request.url.split('/')
  const id = Number(requestParams.at(-1))

  try {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    if (isNaN(id)) {
      const chosen = routes[called]
      chosen(request, response)
    }
    if (!isNaN(id)) {
      const chosen = routes['/users:get-by-id'] 
      chosen(request, response, id)
    }
  } catch (e) {
    response.writeHead(400, { 'Content-Type': 'application/json' })
    console.error(e)
  }
})

server.listen(process.env.PORT || 3000)
server.on('listening', () => {
  console.log('listening on http://localhost:3000')
})