import { Link } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'

export default function Home() {
    const {user, dispatch} = useUserContext()
    console.log(user)

    return (
        <div className='bg-gray-100 w-fit p-6 rounded-2xl'>
            <h2 className='text-lg font-semibold mb-4'>{user.name}</h2>
            <h3 className='mb-6'>Balance: <span className='font-semibold'>${user.balance}</span></h3>
            <Link className="bg-yellow-400 rounded-lg p-2" to="/transactions">View All Transactions</Link>
        </div>
    )
}