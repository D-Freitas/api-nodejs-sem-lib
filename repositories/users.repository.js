const { writeFileSync } = require('fs')

class UsersRepository {
  #users = []

  list () {
    return this.#users
  }

  listById (id) {
    let begin = 0
    let end = this.#users.length - 1

    while (begin <= end) {
      const middleIndex = Math.floor((begin + end) / 2)
      if (this.#users[middleIndex].id === id) {
        return this.#users[middleIndex]
      }
      if (id > this.#users[middleIndex].id) {
        begin = middleIndex + 1
        continue
      }
      end = middleIndex - 1
    }

    return {
      'error': 'user not found'
    }
  }

  async insert (data) {
    this.#users.push({
      id: this.#users.length + 1, 
      ...data
    })
    const formatedData = JSON.stringify(this.#users, null, 2)
    writeFileSync('../data.json', formatedData)
  }
}

module.exports = { UsersRepository }