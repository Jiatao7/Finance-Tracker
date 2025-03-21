//Modules
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/users')
const transactionRoutes = require('./routes/transactions')

require('dotenv').config()

//Initialize app
const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
app.use("/api/users", userRoutes)
app.use("/api/transactions", transactionRoutes)

//Connect to database and listen for requests
mongoose.connect(process.env.dbURI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    })
    .catch(error => console.log(error))