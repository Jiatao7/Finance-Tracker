import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar bg-yellow-400 flex justify-between p-6 mb-8">
      <div className="site-title">
        <Link to="/" className='font-semibold text-xl'>Finance Tracker</Link>
      </div>
      <div className="links">
        <Link to="/transactions" className='p-3'>Transactions</Link>
        <Link to="/budget" className='p-3'>Budget</Link>
        <Link to="/overview" className='p-3'>Overview</Link>
      </div>
    </nav>
  )
}

export default Navbar