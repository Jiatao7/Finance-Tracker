import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext'
import { useTransactionContext } from '../context/TransactionContext'

export default function SummaryCard() {
    const user = useUserContext().user;
    const userDispatch = useUserContext().dispatch;
    const transactions = useTransactionContext().transactions;
    const transactionDispatch = useTransactionContext().dispatch;
    
    const [income, setIncome] = useState(0)
    const [expenses, setExpenses] = useState(0)
    const [net, setNet] = useState(0)

    useEffect(() => {
        let i = 0
        let e = 0
        transactions.forEach(t => {
            if(t.type === 'Income') {
                i += t.amount
            } else if(t.type === 'Expense') {
                e += t.amount
            } else {
                throw new Error('Transaction is neither an income nor expense')
            }
        });
        setIncome(i)
        setExpenses(e)
        setNet(i - e)
    }, [transactions]) 
    

    return (
        <div className='bg-white shadow-lg rounded-2xl w-fit p-6 mb-8 m-auto'>
            <h2 className='text-2xl font-bold mb-8'>Summary for {user ? user.name : null}</h2>
            <h3 className='text-lg mb-6'>Income: <span className='text-lg font-semibold text-green-500'>{income}</span></h3>
            <h3 className='text-lg mb-6'>Expenses: <span className='text-lg font-semibold text-red-500'>{expenses}</span></h3>
            <h3 className='text-lg mb-6'>Net: <span className={`text-lg font-bold ${net > 0 ? "text-green-600" : (net < 0 ? "text-red-600" : "")}`}>{net}</span></h3>
        </div>  
    )
}