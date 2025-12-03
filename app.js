const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const trustedOrigins = ['http://localhost:3000', 'https://your-production-domain.com'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || trustedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}))
const port = process.env.PORT || 5005
const booksDS = require('./lib/policyDS')
const route = require('./routes/route')

booksDS.init()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', route)

app.listen(port, console.log(`Server started at port ${port}`))