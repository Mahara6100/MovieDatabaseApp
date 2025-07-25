import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = ({movie}) => (
  <div className="movie-card">
    <img
      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
      alt={movie.title}
    />
    <h3>{movie.title}</h3>
    <p>⭐ {movie.vote_average}</p>
    <Link to={`/movie/${movie.id}`}>
      <button type="button">View Details</button>
    </Link>
  </div>
)

export default MovieCard
