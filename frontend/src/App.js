import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useUserContext } from './context/UserContext'

//Pages and Components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Setup from './pages/Setup'
import Transactions from './pages/Transactions'
import Budget from './pages/Budget'
import Statistics from './pages/Statistics'

import Navbar from './components/Navbar'

function App() {
  const user = useUserContext().user

  const determineDefaultPath = () => {
    if(user) {
      if(user.new) {
        return <Navigate to="setup" />;
      } else {
        return <Home />
      }
    } else {
      return <Navigate to="login" />;
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages m-16'>
          <Routes>
            <Route path='/' element={determineDefaultPath()} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to="/"/>} />
            <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/"/>} />
            <Route path='/setup' element={user && user.new ? <Setup /> : <Navigate to="/"/>} />
            <Route path='/transactions' element={user && !user.new ? <Transactions /> : <Navigate to="/"/>} />
            <Route path='/budget' element={user && !user.new ? <Budget /> : <Navigate to="/"/>} />
            <Route path='/statistics' element={user && !user.new ? <Statistics /> : <Navigate to="/"/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
