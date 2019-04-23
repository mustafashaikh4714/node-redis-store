const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const PORT = process.env.PORT || 3000
const app = express()

// APP MIDDLEWARE
app.use(methodOverride('_method'))
app.set('view engine', 'hbs')
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

require('./routes/index')(app)

app.listen(PORT, () => console.log(`server started at ${PORT}`))

module.exports = { app }
