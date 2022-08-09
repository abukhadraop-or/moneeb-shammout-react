import { urls } from 'constants';
/**
 * Fetch movies API.
 *
 * @param {number} pageNumber Page number.
 * @param {string} sortType Sort by query.
 *
 * @return {json} Get request result.
 */
const fetchMovies = async (pageNumber, sortType) => {
  try {
    const response = await fetch(
      `${urls.moviesAPI}&sort_by=${sortType}&page=${pageNumber}`
    );
    return await response.json();
  } catch (error) {
    return error;
  }
};

export default fetchMovies;
