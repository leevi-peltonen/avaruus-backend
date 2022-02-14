const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

//Middleware 
app.use(express.json())
app.use(cors())
app.use(express.static('build'))


//Routes
app.get('/api/apod', (req, res) => {
  res.json({
    message: "haloo"
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})