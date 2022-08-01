import PropTypes from 'prop-types';

import Movie from 'Model/Movie';

/**
 *  Fetch movies API.
 * @param {number} pageNumber page number.
 * @param {string} sortQuery page number.
 * @return {Array of Movies} array of movies.
 */ const fetchMovies = async (pageNumber, sortQuery) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie/?api_key=1ed03abf259db3275f034b5a5abe9f9e&language=en-US&sort_by=${sortQuery}&page=${pageNumber}`
    );
    return response;
  } catch (error) {
    return error;
  }
};
fetchMovies.PropTypes = {
  pageNumber: PropTypes.number.isRequired,
};

/**
 * creates a movie list to make data easy to use
 * @param {object} response  response coming from API
 * @return {ArrayOf(Movie)}
 */

const getMoviesList = async (response) => {
  if (response.status >= 400) {
    return [];
  }
  const movieList = await response
    .json()
    .then((data) => data.results.map((movie) => Movie.FromJson(movie)));
  return movieList;
};

export { fetchMovies, getMoviesList };
