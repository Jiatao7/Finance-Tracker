//Modules
const express = require('express')
const transactionRoutes = require('./routes/transactions')
require('dotenv').config()

//Initialize app
const app = express()

// Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
app.use("/api/transactions", transactionRoutes)

// Listen for requests
app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT)
})