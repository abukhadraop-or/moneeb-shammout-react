import { React, useState, useEffect } from 'react';
import fetchMovies from 'service/movies.service';
import Title from 'components/Title/title';
import FilterCard from 'components/FilterCard/filter-card';
import MovieCard from 'components/MovieCard/movie-card';
import Button from 'components/Button/button';
import SortPanel from 'components/SortPanel/sort-panel';
import FilterPanel from 'components/FilterPanel/filter-panel';
import convertDate from 'utilities/methods';
import { sortMap, urls } from 'constants';
import {
  DesktopFiltersContainer,
  DesktopMoviesContainer,
  StyledBody,
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

  /**
   * Shortcut for fetch movie service.
   *
   * @param {boolean} newPage  Add to the old movies or not.
   */
  const fetchMoviesShortcut = async (newPage) => {
    const jsonData = await fetchMovies(page, sortType);

    const newMovies = jsonData.results.map((movie) => ({
      date: movie.release_date,
      description: movie.overview,
      id: movie.id,
      imageURL: `${urls.moviesImage}${movie.poster_path}`,
      percentageRate: movie.vote_average,
      title: movie.original_title,
    }));

    if (newPage) {
      setMovies(newMovies);
      return;
    }

    setMovies(movies.concat(newMovies));
  };

  // Every time movie Page Change it fetches the new page.
  useEffect(() => {
    fetchMoviesShortcut(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  /**
   * Triggering useEffect by incrementing page count.
   */
  const loadClickHandler = async () => {
    setPage((prevState) => 1 + prevState);
  };

  /**
   * Hide or show search button and save value.
   *
   * @param {String} sortName  Sort type text.
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
      await fetchMoviesShortcut(true);
    }
  };

  return (
    <StyledBody>
      <DesktopFiltersContainer>
        <Title title="Popular Movies" theme="popularHeader" />
        <SortPanel onChange={sortFiltersClickHandler} />
        <FilterPanel />
        <FilterCard title="Where To Watch" />
        <Button
          theme="bigBlue"
          text="Search"
          onClick={searchClickHandler}
          disabled={!searchButtonEnabled}
        />
      </DesktopFiltersContainer>

      <DesktopMoviesContainer>
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
        <br />
        <br />
        <Button theme="loadMore" text="LoadMore" onClick={loadClickHandler} />
      </DesktopMoviesContainer>
    </StyledBody>
  );
}

export default Body;
