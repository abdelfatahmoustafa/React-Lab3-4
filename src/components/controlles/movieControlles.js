//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fb764f0f68a3f81e698d585dd4159efb
import axios from "axios";
import MovieModel from "../models/movieModels";

class MovieController {
  static async getMovie() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fb764f0f68a3f81e698d585dd4159efb"
      );
      // console.log(response.data.results);

      return response.data.results.map((movie) => {
        return new MovieModel(
          movie.id,
          movie.title,
          movie.overview,
          movie.release_date,
          movie.vote_average,
          movie.poster_path
        );
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async getMovieById(id) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=fb764f0f68a3f81e698d585dd4159efb`
      );
      return new MovieModel(
        response.data.id,
        response.data.title,
        response.data.overview,
        response.data.release_date,
        response.data.vote_average,
        response.data.poster_path
      );
    } catch (error) {
      console.log(error);
    }
  }
}
export default MovieController;
