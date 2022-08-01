class Movie {
  constructor(title, imageURL, date, description, id, percentageRate) {
    this.title = title;
    this.imageURL = imageURL;
    this.date = date;
    this.description = description;
    this.id = id;
    this.percentageRate = percentageRate;
  }
}
Movie.FromJson = (json) =>
  new Movie(
    json.original_title,
    `https://image.tmdb.org/t/p/w500${json.poster_path}`,
    json.release_date,
    json.overview,
    json.id,
    json.vote_average
  );
export default Movie;
