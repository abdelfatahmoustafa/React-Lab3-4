import { Link } from "react-router-dom";
import "./style.css";
const MovieItem = ({ movie }) => {
  // console.log(movie);

  const fullImageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <Link to={`/movieDetails/${movie.id}`}>
      <div className="card">
        <img src={fullImageUrl} alt={movie.title} className="card-img-top" />
        <div className="card__content">
          <h2 className="card-title">{movie.title}</h2>
          <hr />
          <p>
            Release Date:{" "}
            <span className="badge bg-info mb-4 text-dark p-2">
              📅{movie.release_date}
            </span>
          </p>
          <p>
            Vote Average:{" "}
            <span className="badge bg-warning  mb-4 text-dark p-2 me-2">
              ⭐{movie.vote_average}
            </span>
          </p>

          <p className="card__description">{movie.overview}</p>
        </div>
      </div>
    </Link>
  );
};
export default MovieItem;
