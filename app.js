const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors')


const usersRouter = require('./routes/users.js')

const app = express()

// app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())


app.use('/users', usersRouter)

app.get('/', (req, res)=>{
  res.send('we\'re good to go')
})
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
  console.log(`server is up and running at ${PORT}`)
})

module.exports = app
