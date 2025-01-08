import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext'
import { useTransactionContext } from '../context/TransactionContext'

import StatsCard from './StatsCard';

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
        <div className='ml-64 mr-32 my-16'>
            <StatsCard title={"Summary for " + (user ? user.name : null)} data={{income, expenses, net}} money={true}/>        
        </div>
    )
}