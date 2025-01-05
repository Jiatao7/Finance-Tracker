import TransactionCard from "../components/TransactionCard"
import TranscationForm from "../components/TransactionForm"

import { useUserContext } from "../context/UserContext"
import { useTransactionContext } from "../context/TransactionContext"

export default function Transactions() {
    const {user, userDispatch} = useUserContext()
    const {transactions, transactionDispatch} = useTransactionContext()
    
    console.log(transactions)

    const transactionCards = transactions.map((transaction => 
        <TransactionCard transaction={transaction} key={transaction._id}/>
    ))


    return (
        <div className="p-6">
            <h2 className='text-lg font-semibold mb-8'>Transactions</h2>
            <TranscationForm />
            {transactionCards}     
        </div>
    )
}