/**
 *  Fetch movies API.
 *
 * @param {number} pageNumber Page number.
 * @param {string} sortType page number.
 *
 * @return {Array of Movies} array of movies.
 */
const fetchMovies = async (pageNumber, sortType) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie/?api_key=1ed03abf259db3275f034b5a5abe9f9e&language=en-US&sort_by=${sortType}&page=${pageNumber}`
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return error;
  }
};

export default fetchMovies;
