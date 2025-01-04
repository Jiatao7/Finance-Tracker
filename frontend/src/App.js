import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect } from "react"
import { useUserContext } from './context/UserContext'

//Pages and Components
import Home from './pages/Home'
import Transactions from './pages/Transactions'
import Budget from './pages/Budget'
import Overview from './pages/Overview'

import Navbar from './components/Navbar'

function App() {
  const {dispatch} = useUserContext()

  useEffect(() => {
    const guestId = "67797fe6e381cf8e59450303"
    const fetchUser = async() => {
      const result = await fetch(`/api/users/${guestId}`)
      const data = await result.json()
      dispatch({type: "set", payload: data}) 
    }
    fetchUser()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages p-6'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/budget' element={<Budget />} />
            <Route path='/overview' element={<Overview />} />
          </Routes>
        </div>  
      </BrowserRouter>
    </div>
  );
}

export default App;
