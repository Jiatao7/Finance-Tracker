const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')


const defaultBudget = {
    Housing: 0,
    Transportation: 0,
    Food: 0,
    Healthcare: 0,
    Entertainment: 0,
    Education: 0,
    Miscellaneous: 0,
};


const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    balance: {type: Number, default: 0},
    budget: {type: Object, default: defaultBudget},
    new: {type: Boolean, default: true}
})

userSchema.statics.login = async function (username, password) {
    //Check if username and password entered
    if(!username) {
        throw Error('Please enter an username')
    } else if(!password) {
        throw Error('Please enter a password')
    }

    //Check if username valid
    const user = await this.findOne({ username })
    if(!user) {
        throw Error('Username not in database')
    }

    //Check if password is correct
    console.log(password)
    console.log(user.password)
    const correctPassword = await bcrypt.compare(password, user.password)
    if(!correctPassword) {
        throw Error('Incorrect password')
    }
    
    return user
}

userSchema.statics.signup = async function (username, password) {
    //Check if valid username and password
    if(!username) {
        throw Error('Please enter an username')
    } else if(!password) {
        throw Error('Please enter a password')
    } else if(username.length < 4 || username.length > 20) {
        throw Error('Username must be between 4 to 20 characters long')
    } else if(password.length < 8) {
        throw Error('Password must be at least 8 characters long')
    }
    
    //Check if username already exists
    const exists = await this.findOne({ username })
    if (exists) {
        throw Error('Username already in use')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    //Create account
    const user = await this.create({ username, password: hash, name: username })
    return user
}

const User = mongoose.model("User", userSchema)
module.exports = User

