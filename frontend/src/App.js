import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect } from "react"
import { useUserContext } from './context/UserContext'
import { useTransactionContext } from './context/TransactionContext'

//Pages and Components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Transactions from './pages/Transactions'
import Budget from './pages/Budget'
import Statistics from './pages/Statistics'

import Navbar from './components/Navbar'

function App() {
  const userDispatch = useUserContext().dispatch
  const transactionDispatch = useTransactionContext().dispatch

  useEffect(() => {
    const guestId = "67797fe6e381cf8e59450303"

    //Set user data
    const fetchUser = async() => {
      const result = await fetch(`/api/users/${guestId}`)
      const data = await result.json()
      userDispatch({type: "SET", payload: data}) 
    }
    fetchUser()

    //Set transactions data
    const fetchTransactions = async() => {
      const result = await fetch(`/api/transactions/user/${guestId}`)
      const data = await result.json()
      transactionDispatch({type: "SET", payload: data}) 
    }
    fetchTransactions()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages m-16'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/budget' element={<Budget />} />
            <Route path='/statistics' element={<Statistics />} />
          </Routes>
        </div>  
      </BrowserRouter>
    </div>
  );
}

export default App;
