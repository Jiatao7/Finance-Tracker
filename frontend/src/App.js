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
import Loading from './pages/Loading'
import PageNotFound from './pages/PageNotFound'

import Navbar from './components/Navbar'

function App() {
  const {user, loading} = useUserContext()

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
  
  if (loading) {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar loading={true}/>
          <div className='pages m-16'>
            <Loading />
          </div>
        </BrowserRouter>
      </div>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loading={false}/>
        <div className='pages m-16'>
          <Routes>
            <Route path='/' element={determineDefaultPath()} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to="/"/>} />
            <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/"/>} />
            <Route path='/setup' element={user && user.new ? <Setup /> : <Navigate to="/"/>} />
            <Route path='/transactions' element={user && !user.new ? <Transactions /> : <Navigate to="/"/>} />
            <Route path='/budget' element={user && !user.new ? <Budget /> : <Navigate to="/"/>} />
            <Route path='/statistics' element={user && !user.new ? <Statistics /> : <Navigate to="/"/>} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
