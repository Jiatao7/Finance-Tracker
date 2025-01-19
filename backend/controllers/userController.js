const User = require('../models/userModel')
const mongoose = require("mongoose")
const jwt = require('jsonwebtoken')

//Create jwt
const createToken = (_id) => {
    token = jwt.sign({_id}, process.env.SECRET, {expiresIn: '1d'})
    return token
}

// Login
const login = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await User.login(username, password)
        const token = createToken(user._id)
        res.status(200).json({user, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Signup
const signup = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await User.signup(username, password)
        const token = createToken(user._id)
        res.status(200).json({user, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// GET all users
const getUsers = async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
}

// GET a single user
const getUser = async (req, res) => {
    const id = req.params.id
    const user = await User.findById(id)
    res.status(200).json(user)
}

// GET a single user by username
const getUserByUsername = async (req, res) => {
    const username = req.params.username
    const user = await User.findOne({username})
    res.status(200).json(user)
}

// POST a new user
const createUser = async (req, res) => {
    const data = req.body;
    const user = await User.create(data)
    res.status(200).json(user)
}
  
// DELETE a user
const deleteUser = async (req, res) => {
    const id = req.params.id
    const user = await User.findByIdAndDelete(id)
    res.status(200).json(user)
}

// UPDATE a user
const updateUser = async (req, res) => {
    const data = req.body;
    const id = req.params.id
    const user = await User.findByIdAndUpdate(id, data, {new: true})
    res.status(200).json(user)
}

module.exports = {login, signup, getUsers, getUser, getUserByUsername, createUser, deleteUser, updateUser}