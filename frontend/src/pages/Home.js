import { Link } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'
import { useTransactionContext } from '../context/TransactionContext'

export default function Home() {
    const user = useUserContext().user;
    const userDispatch = useUserContext().dispatch;
    const transactions = useTransactionContext().transactions;
    const transactionDispatch = useTransactionContext().dispatch;

    console.log(user)
    console.log(transactions)

    return (
        <div className='bg-gray-100 w-fit p-6 rounded-2xl'>
            <h2 className='text-2xl font-bold mb-8'>{user ? user.name : null}</h2>
            <h3 className='text-lg mb-10'>Balance: <span className='text-lg font-semibold'>${user ? user.balance : null}</span></h3>
            <Link className="text-lg bg-yellow-400 rounded-lg p-2" to="/transactions">View All Transactions</Link>
        </div>
    )
}   