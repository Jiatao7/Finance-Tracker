import { BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages and Components
import Home from './pages/Home'
import Transactions from './pages/Transactions'
import Budget from './pages/Budget'
import Overview from './pages/Overview'

import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
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
