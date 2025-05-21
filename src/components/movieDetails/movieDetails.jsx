import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieController from "../controlles/movieControlles";

const MovieDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    MovieController.getMovieById(id)
      .then((movie) => {
        setMovieDetails(movie);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!movieDetails) {
    return <div>No movie details available</div>;
  }
  const fullImageUrl = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-sm-12 d-flex  m-auto">
          {/* <div className="card mb-5"> */}
          <div className="card mb-5 col-sm-3">
            <img
              src={fullImageUrl}
              alt={movieDetails.title}
              className="card-img-top"
            />
          </div>
          <div
            className="card-body ps-3 col-sm-6 d-flex flex-column justify-content-center
            align-items-center"
          >
            <h2 className="card-title mb-4">{movieDetails.title}</h2>
            <p className="card-text">{movieDetails.overview}</p>
            <hr />
            {/* <p>Release Date: {movieDetails.release_date}</p> */}
            <span className="badge bg-info mb-4 text-dark p-2">
              📅 {movieDetails.release_date}
            </span>
            <span className="badge bg-warning  mb-4 text-dark p-2 me-2">
              ⭐ {movieDetails.vote_average}/10
            </span>
            {/* <p>Vote Average: {movieDetails.vote_average}</p> */}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
