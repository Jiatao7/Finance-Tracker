//Modules
const express = require('express')
const mongoose = require('mongoose')
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

//Connect to database and listen for requests
mongoose.connect(process.env.dbURI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Listening")
        })
    })
    .catch(error => console.log(error))