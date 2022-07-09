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
})