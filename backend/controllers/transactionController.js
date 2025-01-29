const mongoose = require("mongoose")
const Transaction = require('../models/transactionModel')

// GET all transactions
const getTransactions = async (req, res) => {
    const userId = req.user._id
    const transactions = await Transaction.find( {userId} ).sort({date: -1})
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
    try {
        const userId = req.user._id
        const data = {...req.body, userId};
        const transaction = await Transaction.create(data)
        res.status(200).json(transaction)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
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
