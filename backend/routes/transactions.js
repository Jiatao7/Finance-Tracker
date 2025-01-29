// Set up router
const express = require("express")
const router = express.Router()

//Import controller and middleware
const {getTransactions, getUserTransactions, getTransaction, createTransaction, deleteTransaction, updateTransaction} = require("../controllers/transactionController")
const requireAuth = require('../middleware/requireAuth')

// Use middleware
router.use(requireAuth)

// GET all Transactions
router.get('/', getTransactions)

// GET all Transactions from a SINGLE USER
router.get('/user/:id', getUserTransactions)

// GET a single Transaction
router.get('/:id', getTransaction)

// POST a new Transaction
router.post('/', createTransaction)
  
// DELETE a Transaction
router.delete('/:id', deleteTransaction)

// UPDATE a Transaction
router.patch('/:id', updateTransaction)

module.exports = router