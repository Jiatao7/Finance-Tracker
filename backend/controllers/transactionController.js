const mongoose = require("mongoose")
const Transaction = require('../models/transactionModel')
const User = require('../models/userModel')

// GET all transactions
const getTransactions = async (req, res) => {
    const transactions = await Transaction.find().sort({Date: -1})
    res.status(200).json(transactions)
}

// GET a single transaction
const getTransaction = async (req, res) => {
    const id = req.params.id
    const transaction = await Transaction.findById(id)
    res.status(200).json(transaction)
}

// POST a new transaction
const createTransaction = async (req, res) => {
    const data = req.body;
    const transaction = await Transaction.create(data)
    res.status(200).json(transaction)
}
  
// DELETE a transaction
const deleteTransaction = async (req, res) => {
    const id = req.params.id
    const transaction = await Transaction.findByIdAndDelete(id)
    res.status(200).json(transaction)
}

// UPDATE a transaction
const updateTransaction = async (req, res) => {
    const data = req.body;
    const id = req.params.id
    const transaction = await Transaction.findByIdAndUpdate(id, data, {new: true})
    res.status(200).json(transaction)
}

module.exports = {getTransactions, getTransaction, createTransaction, deleteTransaction, updateTransaction}
