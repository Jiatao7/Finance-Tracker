import TransactionCard from "../components/TransactionCard"
import TranscationForm from "../components/TransactionForm"

import { useUserContext } from "../context/UserContext"
import { useTransactionContext } from "../context/TransactionContext"

export default function Transactions() {
    const user = useUserContext().user;
    const userDispatch = useUserContext().dispatch;
    const transactions = useTransactionContext().transactions;
    const transactionDispatch = useTransactionContext().dispatch;
    
    console.log(transactions)

    const transactionCards = transactions.map((transaction => 
        <TransactionCard transaction={transaction} key={transaction._id}/>
    ))


    return (
        <div className="p-6">
            <TranscationForm />
            <h3 className="text-xl font-bold text-gray-800 mb-4">All Transactions</h3>
            {transactionCards}     
        </div>
    )
}