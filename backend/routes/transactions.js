// Set up router
const express = require("express")
const router = express.Router()

//Import controller
const {getTransactions, getTransaction, createTransaction, deleteTransaction, updateTransaction} = require("../controllers/transactionController")

// GET all Transactions
router.get('/', getTransactions)

// GET a single Transaction
router.get('/:id', getTransaction)

// POST a new Transaction
router.post('/', createTransaction)
  
// DELETE a Transaction
router.delete('/:id', deleteTransaction)

// UPDATE a Transaction
router.patch('/:id', updateTransaction)

module.exports = router