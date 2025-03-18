import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useUserContext } from '../context/UserContext'

const Navbar = ({loading}) => {
  const { logout } = useLogout()
  const user = useUserContext().user

  function displayWarning() {
    alert("Please complete account setup first!")
  }
  
  function handleClick() {
    logout()
  }

  if(loading) {
    return (
      <nav className="navbar bg-yellow-400 flex justify-between px-12 py-8 mb-8">
        <div className="site-title">
          <Link to="/" className='font-semibold text-2xl'>Finance Tracker</Link>
        </div>
      </nav>
    )
  }

  return (
    <nav className="navbar bg-yellow-400 flex justify-between px-12 py-8 mb-8">
      <div className="site-title">
        <Link to="/" className='font-semibold text-2xl'>Finance Tracker</Link>
      </div>
      <div className="links">
        {user && user.new && (
          <>
            <Link onClick={displayWarning} className='p-2 m-2 text-lg'>Transactions</Link>
            <Link onClick={displayWarning} className='p-2 m-2 text-lg'>Statistics</Link>
            <Link onClick={handleClick} className='p-2 m-2 text-lg cursor-pointer'>Log out</Link>
          </>
        )}
        {user && !user.new && (
          <>
            <Link to="/transactions" className='p-2 m-2 text-lg'>Transactions</Link>
            <Link to="/statistics" className='p-2 m-2 text-lg'>Statistics</Link>
            <Link onClick={handleClick} className='p-2 m-2 text-lg cursor-pointer'>Log out</Link>
          </>
        )}
        {!user && (
          <>
            <Link to="/login" className='p-2 m-2 text-lg'>Log In</Link>
            <Link to="/signup" className='p-2 m-2 text-lg'>Sign Up</Link>
          </>
        )}        
      </div>
    </nav>
  )
}

export default Navbar
