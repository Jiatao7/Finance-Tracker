import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useUserContext } from './context/UserContext'

//Pages and Components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Transactions from './pages/Transactions'
import Budget from './pages/Budget'
import Statistics from './pages/Statistics'

import Navbar from './components/Navbar'

function App() {
  const user = useUserContext().user

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages m-16'>
          <Routes>
            <Route path='/' element={user ? <Home /> : <Navigate to="/login"/>} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to="/"/>} />
            <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/"/>} />
            <Route path='/transactions' element={user ? <Transactions /> : <Navigate to="/login"/>} />
            <Route path='/budget' element={user ? <Budget /> : <Navigate to="/login"/>} />
            <Route path='/statistics' element={user ? <Statistics /> : <Navigate to="/login"/>} />
          </Routes>
        </div>  
      </BrowserRouter>
    </div>
  );
}

export default App;
