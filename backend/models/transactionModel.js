const mongoose = require("mongoose")
const Schema = mongoose.Schema

const transactionCategories = [
    "Income",
    "Housing",
    "Transportation",
    "Food",
    "Healthcare",
    "Entertainment",
    "Education",
    "Miscellaneous",
];

const transactionSchema = new Schema({
    userId: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, enum: ['Income', 'Expense'], required: true },
    category: { type: String, required: true, enum: transactionCategories},
    date: { type: Date, default: Date.now }
});

const Transaction = mongoose.model("Transaction", transactionSchema)
module.exports = Transaction