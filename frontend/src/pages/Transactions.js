import TransactionCard from "../components/TransactionCard"
import TranscationForm from "../components/TransactionForm"

import { useUserContext } from "../context/UserContext"
import { useTransactionContext } from "../context/TransactionContext"

export default function Transactions() {
    const {user, userDispatch} = useUserContext()
    const {transactions, transactionDispatch} = useTransactionContext()
    

    return (
        <>
            <h2>Transactions</h2>
            



            <TranscationForm />
            <TransactionCard transaction={transactions}/>        
        </>
    )
}