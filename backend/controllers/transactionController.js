// GET all transactions
const getTransactions = async (req, res) => {
    res.json({mssg: 'Get all transactions'})
}

// GET a single transaction
const getTransaction = async (req, res) => {
    res.json({mssg: 'Get a transaction'})
}

// POST a new transaction
createTransaction = async (req, res) => {
    res.json({mssg: 'Create a transaction'})
}
  
// DELETE a transaction
deleteTransaction = async (req, res) => {
    res.json({mssg: 'Delete a transaction'})
}

// UPDATE a transaction
updateTransaction = async (req, res) => {
    res.json({mssg: 'Update a transaction'})
}

module.exports = {getTransactions, getTransaction, createTransaction, deleteTransaction, updateTransaction}
