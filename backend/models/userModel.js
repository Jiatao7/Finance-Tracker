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
    name: {type: String},
    balance: {type: Number, default: 0},
    budget: {type: Object, default: defaultBudget},
    new: {type: Boolean, default: true}
})

userSchema.statics.signup = async function (username, password) {
    //Check if username already exists
    const exists = await this.findOne({ username })
    if (exists) {
        throw Error('Username already in use')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(username, salt)

    //Create account
    const user = await this.create({ username, password: hash })
    return user
}

const User = mongoose.model("User", userSchema)
module.exports = User

