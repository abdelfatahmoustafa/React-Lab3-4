import { useEffect, useState } from "react";
import MovieController from "../controlles/movieControlles";
import MovieItem from "../movieItem/movieItem";

const MovieList = () => {
  //   const movies = MovieController.getMovie();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    MovieController.getMovie()
      .then((movies) => {
        // console.log(movies);

        setMovies(movies);
        setLoading(false);

        // console.log(movies);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row ">
              {movies.map((movie) => (
                <div className="col-md-4 mt-5" key={movie.id}>
                  <MovieItem movie={movie} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
