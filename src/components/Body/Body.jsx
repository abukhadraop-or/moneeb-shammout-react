import { React, useState, useEffect } from 'react';
import fetchMovies from 'service/movies.service';
import Title from 'components/Title/Title';
import FilterCard from 'components/FilterCard/FilterCard';
import MovieCard from 'components/MovieCard/MovieCard';
import Button from 'components/Button/Button';
import SortPanel from 'components/SortPanel/SortPanel';
import FilterPanel from 'components/FilterPanel/FilterPanel';
import convertDate from 'utilities/methods';
import { sortMap, urls } from 'constants';
import { FiltersContainer, MoviesContainer, StyledBody } from './body.style';

/**
 * Body component.
 *
 * @return {Element}
 */
function Body() {
  const [searchButtonEnabled, setSearchButtonEnabled] = useState(false);
  const [sortType, setSortType] = useState('popularity.desc');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  /**
   * Uses fetch movie service to fetch and render movies.
   *
   * @param {boolean} newPage Add to the old movies or not.
   */
  const getMovies = async (newPage) => {
    const response = await (await fetchMovies(page, sortType)).json();

    const newMovies = response.map((movie) => ({
      date: movie.release_date,
      description: movie.overview,
      id: movie.id,
      imageURL: `${urls.moviesImage}${movie.poster_path}`,
      percentageRate: movie.vote_average,
      title: movie.original_title,
    }));

    setMovies(newPage ? newMovies : movies.concat(newMovies));
  };

  // Every time movie page change it fetches the new page.
  useEffect(() => {
    getMovies(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  /**
   * Handles load more click.
   */
  const loadClickHandler = async () => {
    setPage((prevState) => 1 + prevState);
  };

  /**
   * Hide or show search button and save value.
   *
   * @param {string} sortName Sort type text.
   */
  const sortFiltersClickHandler = (sortName) => {
    setSortType(sortMap[sortName]);
    setSearchButtonEnabled(true);
  };

  /**
   * Fetch movies based on sorting preferences.
   */
  const searchClickHandler = async () => {
    if (searchButtonEnabled) {
      await getMovies(true);
    }
  };

  return (
    <StyledBody>
      <FiltersContainer>
        <Title
          title="Popular Movies"
          className="popularHeader"
          fontWeight="medium-high"
          fontSize="big"
        />
        <SortPanel onChange={sortFiltersClickHandler} />
        <FilterPanel />
        <FilterCard title="Where To Watch" />
        <Button
          className="searchButton"
          fontWeight="medium-high"
          fontSize="medium-high"
          color="white"
          text="Search"
          onClick={searchClickHandler}
          disabled={!searchButtonEnabled}
        />
      </FiltersContainer>

      <MoviesContainer>
        {movies.map((movie) => (
          <MovieCard
            title={movie.title}
            description={movie.description}
            imageURL={movie.imageURL}
            date={convertDate(movie.date)}
            key={movie.id}
            percentageRate={movie.percentageRate}
          />
        ))}

        <Button
          className="loadMore"
          fontSize="nearly-big"
          fontWeight="medium-high"
          color="white"
          text="LoadMore"
          onClick={loadClickHandler}
        />
      </MoviesContainer>
    </StyledBody>
  );
}

export default Body;
