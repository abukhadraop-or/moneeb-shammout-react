export default class HTTP {
  /**
   * Fetch movies API.
   *
   * @param {number} pageNumber Page number.
   * @param {string} sortType Sort by query.
   *
   * @return {Promise<Response>}
   */
  static fetchMovies = async (pageNumber, sortType) => {
    try {
      const response = await fetch(
        `http://localhost:3000/movies?page=${pageNumber}&sortBy=${sortType}`,
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          method: 'GET',
        }
      );
      return response;
    } catch (error) {
      return error;
    }
  };
}
