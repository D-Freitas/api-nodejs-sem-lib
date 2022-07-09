const BASE_URL = 'http://localhost:3000/users'

describe('Users route', () => {
  it('should register a user successfully', async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: 'teste'
      })
    }
    const response = await fetch(BASE_URL, options)
    const data = await response.text()
    expect(data).toBe('user registred successfully')
  })

  it('should return json content type', async () => {
    const data = await fetch(BASE_URL)
    expect(data.headers.get('Content-Type')).toBe('application/json')
  })

  it('should return some data when send a get request', async () => {
    const data = await fetch(BASE_URL)
    expect(data.body).not.toBe(undefined)
  })

  it('should return user data by id', async () => {
    const userAmount = await fetch(BASE_URL)
    const data = await userAmount.json()

    for (let id = 1; id <= data.length; id++) {
      const response = await fetch(`${BASE_URL}/${id}`)
      const data = await response.json()
      expect(data.id).toBe(id)
    }
  })
})