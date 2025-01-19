import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar bg-yellow-400 flex justify-between px-12 py-8 mb-8">
      <div className="site-title">
        <Link to="/" className='font-semibold text-2xl'>Finance Tracker</Link>
      </div>
      <div className="links">
        <Link to="/transactions" className='p-2 m-2 text-lg'>Transactions</Link>
        <Link to="/statistics" className='p-2 m-2 text-lg'>Statistics</Link>
        <Link to="/login" className='p-2 m-2 text-lg'>Log In</Link>
        <Link to="/signup" className='p-2 m-2 text-lg'>Sign Up</Link>
      </div>
    </nav>
  )
}

export default Navbar
