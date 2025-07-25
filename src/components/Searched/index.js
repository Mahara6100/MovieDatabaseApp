import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import MovieCard from '../MovieCard'

const Searched = () => {
  const [movies, setMovies] = useState([])
  const query = new URLSearchParams(useLocation().search).get('query')
  useEffect(() => {
    if (query) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=b77bc467f92fbcb59b25c922c243e69d
&query=${query}`,
      )
        .then(res => res.json())
        .then(data => setMovies(data.results))
    }
  }, [query])
  return (
    <div className="grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
export default Searched
