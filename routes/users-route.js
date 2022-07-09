const { UsersRepository } = require('../repositories/users.repository.js')
const { getRequestData } = require('../utils/get-request-data.js')
const usersRepository = new UsersRepository()

const routes = {
  '/users:get': (request, response) => {
    const data = usersRepository.list()
    response.write(JSON.stringify(data, null, 2))
    response.end()
  },
  '/users:get-by-id': (request, response, id) => {
    const data = usersRepository.listById(id)
    response.write(JSON.stringify(data, null, 2))
    response.end()
  },
  '/users:post': async (request, response) => {
    const data = await getRequestData(request)
    usersRepository.insert(JSON.parse(data))
    response.write('user registred successfully')
    response.end()
  }
}

module.exports = { routes }