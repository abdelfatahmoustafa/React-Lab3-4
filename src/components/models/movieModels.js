class MovieModel {
  constructor(id, title, overview, release_date, vote_average, poster_path) {
    this.id = id;
    this.title = title;
    this.overview = overview;
    this.release_date = release_date;
    this.vote_average = vote_average;
    this.poster_path = poster_path;
  }
}
export default MovieModel;
