import {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Navbar = ({history}) => {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    if (query.trim() !== '') {
      history.push(`/search?query=${encodeURIComponent(query.trim())}`)
      setQuery('')
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/">
          <h1>movieDB</h1>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Popular</Link>
        <Link to="/top-rated">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') handleSearch()
          }}
        />

        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </nav>
  )
}

// Export withRouter to inject history prop
export default withRouter(Navbar)
