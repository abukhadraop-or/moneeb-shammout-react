import { PropTypes } from 'reuse/Packages';
import Movie from 'model/movie';
/**
 * @description fetche movies API
 * @param {number} pageNumber page number
 * @param {string} sortQuery page number
 * @return {Array of Movies} array of movies
 */

const fetchMovies = async (pageNumber, sortQuery) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=1ed03abf259db3275f034b5a5abe9f9e&language=en-US&page=${pageNumber}&sort_by=${sortQuery}`
    );
    let movieList = [];
    await response.json().then((data) => {
      movieList = data.results.map((movie) => Movie.FromJson(movie));
    });
    return movieList;
  } catch (error) {
    return error;
  }
};
fetchMovies.PropTypes = {
  pageNumber: PropTypes.number.isRequired,
};
export default fetchMovies;
