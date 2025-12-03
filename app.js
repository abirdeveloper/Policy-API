const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
const port = process.env.PORT || 5005
const booksDS = require('./lib/policyDS')
const route = require('./routes/route')
const logger = require('./lib/logger') // Assuming you have a logger

booksDS.init()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', route)

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.stack) // Log the error

  // Customize error response based on the error type or status code
  if (err.status === 404) {
    res.status(404).json({ error: 'Not Found', message: err.message });
  } else if (err.name === 'ValidationError') {
    res.status(400).json({ error: 'Validation Error', message: err.message });
  } else {
    // Generic error response
    res.status(500).json({ error: 'Internal Server Error', message: 'Something went wrong' });
  }
});


app.listen(port, () => {
  logger.info(`Server started at port ${port}`);
  console.log(`Server started at port ${port}`);
})