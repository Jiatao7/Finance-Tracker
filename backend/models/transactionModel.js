const mongoose = require("mongoose")

const transactionCategories = [
    "Housing",
    "Transportation",
    "Food",
    "Healthcare",
    "Entertainment",
    "Education",
    "Miscellaneous",
];

const transactionSchema = mongoose.Schema({
    userId: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, enum: ['income', 'expense'], required: true },
    category: { type: String, required: true, enum: transactionCategories},
    date: { type: Date, default: Date.now }
});

const Transaction = mongoose.model("Transaction", transactionSchema)
module.exports = Transaction