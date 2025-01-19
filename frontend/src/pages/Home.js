import { Link } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'
import { useTransactionContext } from '../context/TransactionContext'

export default function Home() {
    const {user} = useUserContext()

    return (
        <div className='bg-white shadow-lg rounded-2xl w-fit p-6 m-auto'>
            <h2 className='text-2xl font-bold mb-8'>{user ? user.username : null}</h2>
            <h3 className='text-lg mb-10'>Balance: <span className='text-lg font-semibold'>${user ? user.balance : null}</span></h3>
            <Link className="text-lg bg-yellow-400 rounded-lg p-2" to="/transactions">View All Transactions</Link>
        </div>
    )
}   