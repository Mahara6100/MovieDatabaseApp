import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import './index.css' // Make sure to import your CSS!

const SingleMovie = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b77bc467f92fbcb59b25c922c243e69d`,
    )
      .then(res => res.json())
      .then(data => setMovie(data))

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=b77bc467f92fbcb59b25c922c243e69d`,
    )
      .then(res => res.json())
      .then(data => setCast(data.cast))
  }, [id])

  if (!movie) return <p>Loading...</p>

  return (
    <div className="single-movie">
      <div className="single-section">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="single-movie-details-section">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>⭐ {movie.vote_average}</p>
          <p>Duration: {movie.runtime} min</p>
          <p>Release: {movie.release_date}</p>
        </div>
      </div>
      <h3>Cast</h3>
      <div className="grid">
        {cast.map(actor => (
          <div key={actor.cast_id}>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <div style={{height: '300px', background: '#333'}} />
            )}
            <p>
              {actor.name} as {actor.character}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SingleMovie
