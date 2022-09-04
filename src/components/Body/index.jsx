import { React, useState, useEffect } from 'react';
import HTTP from 'service/movies.service';
import Title from 'components/Title';
import FilterCard from 'components/FilterCard';
import MovieCard from 'components/MovieCard';
import SortPanel from 'components/SortPanel';
import FilterPanel from 'components/FilterPanel';
import convertDate from 'utilities/date-methods';
import { sortMap, urls } from 'constants';

import {
  FiltersContainer,
  MoviesContainer,
  StyledBody,
  SearchButton,
  LoadMoreButton,
} from './body.style';

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
  const [showLoadMore, setShowLoadMore] = useState(true);
  /**
   * Uses fetch movie service to fetch and render movies.
   *
   * @param {boolean} newPage Add to the old movies or not.
   */
  const getMovies = async (newPage) => {
    const response = await HTTP.fetchMovies(page, sortType);

    if (response.status >= 400) {
      setShowLoadMore(false);
      return;
    }

    const jsonData = await response.json();
    const newMovies = jsonData.map((movie) => ({
      date: movie.releaseDate,
      description: movie.overview,
      id: movie.id,
      imageURL: `${urls.moviesImage}${movie.posterPath}`,
      percentageRate: movie.voteAverage,
      title: movie.title,
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
        <Title title="Popular Movies" fontWeight="medium-high" fontSize="big" />
        <SortPanel onChange={sortFiltersClickHandler} />
        <FilterPanel />
        <FilterCard title="Where To Watch" />

        <SearchButton
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

        {showLoadMore && (
          <LoadMoreButton
            fontSize="nearly-big"
            fontWeight="medium-high"
            color="white"
            text="LoadMore"
            onClick={loadClickHandler}
          />
        )}
      </MoviesContainer>
    </StyledBody>
  );
}

export default Body;
