import {useEffect, useState} from 'react'
import MovieCard from '../MovieCard'
import './index.css'

const Upcoming = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=b77bc467f92fbcb59b25c922c243e69d&page=${page}`,
    )
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }, [page])

  return (
    <div>
      <div className="grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="pagination">
        <button
          type="button"
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        <span className="page-number">Page {page}</span>
        <button type="button" onClick={() => setPage(prev => prev + 1)}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Upcoming
