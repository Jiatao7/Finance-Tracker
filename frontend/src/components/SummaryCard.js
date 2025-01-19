import { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext'
import { useTransactionContext } from '../context/TransactionContext'

import StatsCard from './StatsCard';

export default function SummaryCard() {
    const {user} = useUserContext();
    const {transactions} = useTransactionContext();
    
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
            <StatsCard title={"Summary for " + (user ? user.username : null)} data={{income, expenses, net}} money={true} key={"Summary Card"}/>        
        </div>
    )
}