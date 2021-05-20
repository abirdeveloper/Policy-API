const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
const port = process.env.PORT || 5005
const booksDS = require('./lib/policyDS')
const route = require('./routes/route')

booksDS.init()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', route)

app.listen(port, console.log(`Server started at port ${port}`))