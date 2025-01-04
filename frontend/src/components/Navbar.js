import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div className="container font-bold underline">
        <Link to="/">
          <h1>Finance Tracker</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar