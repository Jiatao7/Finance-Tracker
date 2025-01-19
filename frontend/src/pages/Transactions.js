import TransactionCard from "../components/TransactionCard"
import TranscationForm from "../components/TransactionForm"

import { useTransactionContext } from "../context/TransactionContext"

export default function Transactions() {
    const {transactions} = useTransactionContext()
    
    const transactionCards = transactions.map((transaction => 
        <TransactionCard transaction={transaction} key={transaction._id}/>
    ))

    return (
        <div className="p-6">
            <TranscationForm />
            <h3 className="text-xl font-bold text-center text-gray-800 mb-4">All Transactions</h3>
            {transactionCards}     
        </div>
    )
}