const mongoose = require("mongoose")
const Schema = mongoose.Schema

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
    balance: {type: Number, required: true},
    budget: {type: Object, default: defaultBudget},
    new: {type: Boolean, default: true}
})

const User = mongoose.model("User", userSchema)
module.exports = User

