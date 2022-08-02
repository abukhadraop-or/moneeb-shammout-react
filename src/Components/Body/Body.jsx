import { React, useState, useEffect } from 'react';
import { fetchMovies, getMoviesList } from 'Service/Movies.Service';

import Title from 'Components/Title/Title';
import FilterCard from 'Components/FilterCard/FilterCard';
import MovieCard from 'Components/MovieCard/MovieCard';
import Button from 'Components/Button/Button';
import BodySort from 'Components/BodySort/BodySort';
import BodyFilter from 'Components/BodyFilter/BodyFilter';

import { sortMap } from 'Constants/Content';
import {
  DesktopFiltersContainer,
  DesktopMoviesContainer,
  StyledBody,
} from './Body.Style';

/**
 * Create Body component.
 * @return {JSX}  Body component.
 */

function Body() {
  const [showSearchButton, setShowSearchButton] = useState(false);
  const [searchQuery, setSearchQuery] = useState('popularity.desc');
  const [moviePage, setMoviePage] = useState(1);
  const [movies, setMovies] = useState([]);

  /**
   * Shortcut for fetch movie service.
   * @param {arrayOf(movie)} oldMovies Previous movies list.
   */

  const fetchMoviesShortcut = async (oldMovies) => {
    await fetchMovies(moviePage, searchQuery).then(async (response) => {
      await getMoviesList(response).then((newMovies) => {
        setMovies(oldMovies.concat(newMovies));
      });
    });
  };

  // Every time movie Page Change it fetches the new page.

  useEffect(() => {
    fetchMoviesShortcut(movies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviePage]);

  /**
   *  triggering useEffect by incrementing page count.
   */

  const loadMoreClickHandler = async () => {
    setMoviePage((prevState) => 1 + prevState);
  };

  /**
   * Hide or show search button and save value.
   * @param {String} queryName  Query name for sorting.
   * @param {bool}   showButton State in which show or hide search button.
   */

  const sortFiltersClickHandler = (queryName, showButton) => {
    setSearchQuery(sortMap[queryName]);
    setShowSearchButton(showButton);
  };

  /**
   *  Fetch movies based on sorting preferences.
   */

  const searchButtonClickHandler = async () => {
    if (showSearchButton) {
      await fetchMoviesShortcut([]);
    }
  };

  /**
   *  Converts date from YYYY-MM-DD to mm-dd-YYYY.
   * @param {string} dateString  Date to be converted.
   * @return {string} New formatted date.
   */

  const convertDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString([], {
      month: 'short',
    });
    const day = date.getDay();
    const newDay = day < 10 ? `0${day}` : day;
    return `${month} ${newDay}, ${date.getFullYear()}`;
  };

  return (
    <StyledBody>
      <DesktopFiltersContainer>
        <Title title="Popular Movies" theme="popularHeader" />
        <BodySort onSort={sortFiltersClickHandler} />
        <BodyFilter />
        <FilterCard title="Where To Watch" />
        <Button
          theme="bigBlue"
          text="Search"
          onClick={searchButtonClickHandler}
          disabled={!showSearchButton}
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
        <Button
          theme="loadMore"
          text="LoadMore"
          onClick={loadMoreClickHandler}
        />
      </DesktopMoviesContainer>
    </StyledBody>
  );
}

export default Body;
