// Set up router
const express = require("express")
const router = express.Router()

//Import controller
const {login, signup, getUsers, getUser, createUser, deleteUser, updateUser} = require("../controllers/userController")

// Login
router.post('/login', login)

// Signup
router.post('/signup', signup)

// GET all Users
router.get('/', getUsers)

// GET a single User
router.get('/:id', getUser)

// POST a new User
router.post('/', createUser)
  
// DELETE a User
router.delete('/:id', deleteUser)

// UPDATE a User
router.patch('/:id', updateUser)

module.exports = router