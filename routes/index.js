const redis = require('redis')
module.exports = app => {
  // Setup redis client.
  const client = redis.createClient()
  client.on('connect', () => console.log('connected to redis'))

  app.get('/', (req, res) => {
    res.send('Redis Demo.')
  })

  app.get('/add/user', (req, res) => {
    res.render('add_user')
  })

  app.post('/add/user', (req, res) => {
    let { username, email, phone } = req.body
    client.hmset(
      username,
      ['email', email, 'phone', phone],
      (err, response) => {
        if (err) console.log(err)
        console.log(response)
        res.redirect('/')
      }
    )
  })
}
