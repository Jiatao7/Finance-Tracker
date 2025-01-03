const mongoose = require("mongoose")

const defaultBudget = {
    Housing: 0,
    Transportation: 0,
    Food: 0,
    Healthcare: 0,
    Entertainment: 0,
    Education: 0,
    Miscellaneous: 0,
};

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    balance: {type: String, required: true},
    budget: {type: Object, default: defaultBudget}
})

const User = mongoose.model("User", userSchema)
module.exports = User

