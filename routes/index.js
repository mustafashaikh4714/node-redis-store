module.exports = app => {
  app.get('/', (req, res) => {
    res.send('redis datastructure store demo.')
  })
}
