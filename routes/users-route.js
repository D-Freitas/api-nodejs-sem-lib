const { UsersRepository } = require('../repositories/users.repository.js')
const { getRequestData } = require('../utils/get-request-data.js')
const usersRepository = new UsersRepository()

const routes = {
  '/users:post': async (request, response) => {
    const data = await getRequestData(request)
    usersRepository.insert(JSON.parse(data))
    response.write('user registred successfully')
    response.end()
  }
}

module.exports = { routes }