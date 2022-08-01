import { React, useState, useEffect } from 'react';
import { fetchMovies, getMoviesList } from 'Service/Movies.Service';

import Title from 'Components/Title/Title';
import FilterCard from 'Components/FilterCard/FilterCard';
import SelectMenu from 'Components/SelectMenu/SelectMenu';
import Icon from 'Components/Icon/Icon';
import RadioButton from 'Components/RadioButton/RadioButton';
import CheckBox from 'Components/CheckBox/CheckBox';
import MovieCard from 'Components/MovieCard/MovieCard';
import CountryDropDown from 'Components/CountryDropDown/CountryDropDown';
import Button from 'Components/Button/Button';

import {
  availabilitiesList,
  filtersList,
  releaseList,
  sortMap,
} from 'Constants/Content';
import {
  DesktopFiltersContainer,
  DesktopMoviesContainer,
  InfoPopUp,
  StyledBody,
} from './Body.Style';

/**
 * Create Body component.
 * @return {JSX}  Body component.
 */

function Body() {
  const [showInfo, setShowInfo] = useState(false);
  const [radioBtnState, setRadioBtnState] = useState({
    [filtersList[0]]: false,
    [filtersList[1]]: false,
    [filtersList[2]]: false,
  });
  const [showAvailability, setShowAvailability] = useState(false);
  const [showReleaseDates, setShowReleaseDates] = useState(false);
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
   * Show or hide question mark info on click.
   * @param {object}  event Event object.
   */

  const infoIconClickHandler = (event) => {
    if (event.currentTarget.id === 'icon') {
      event.stopPropagation();
      setShowInfo((prevState) => !prevState);
    } else {
      setShowInfo(false);
    }
  };

  /**
   * Check or uncheck radio button.
   * @param {String}  id Radio button identifier.
   */

  const filtersChangeHandler = (id) => {
    setRadioBtnState((prevState) => {
      const newData = {
        [filtersList[0]]: false,
        [filtersList[1]]: false,
        [filtersList[2]]: false,
        [id]: !prevState[id],
      };
      return newData;
    });
  };

  /**
   *  Show or hide availabilities checkboxes.
   */

  const toggleAvailability = () => {
    setShowAvailability((prevState) => !prevState);
  };

  /**
   *  Show or hide Release checkboxes.
   */

  const toggleReleaseDates = () => {
    setShowReleaseDates((prevState) => !prevState);
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
        {/* SORT DROP DOWN */}
        <FilterCard title="Sort">
          <Title title="Sort Results By" theme="light" />
          <br />
          <SelectMenu
            optionsList={Object.keys(sortMap)}
            selectMenuChangeHandler={sortFiltersClickHandler}
          />
          <br />
        </FilterCard>

        {/* fILTERS DROP DOWN */}
        <FilterCard
          title="Filters"
          onClick={(event) => infoIconClickHandler(event)}
        >
          {showInfo && (
            <InfoPopUp>Log In To Filter Items You&apos;ve Watched</InfoPopUp>
          )}
          <Title title="Show Me" theme="light">
            <Icon
              id="icon"
              color="grey"
              iconName="HiQuestion"
              onClick={(event) => infoIconClickHandler(event)}
            />
          </Title>

          <br />
          {filtersList.map((label) => (
            <RadioButton
              label={label}
              id={label}
              key={label}
              onChangeHandler={filtersChangeHandler}
              checked={radioBtnState[label]}
            />
          ))}

          <Title title="Availabilities" theme="light" />

          {availabilitiesList.map((item) => (
            <CheckBox
              label={item}
              onCheckHandler={
                availabilitiesList[0] === item ? toggleAvailability : null
              }
              itemVisibility={
                availabilitiesList[0] === item ? true : showAvailability
              }
              key={item}
            />
          ))}
          <Title title="Release Dates" theme="light" />
          <CheckBox
            label={releaseList[0]}
            onCheckHandler={toggleReleaseDates}
            itemVisibility
            key={releaseList[0]}
          />
          <CheckBox
            label={releaseList[1]}
            itemVisibility={showReleaseDates}
            key={releaseList[1]}
          />
          {releaseList.slice(1).map((item) => (
            <CheckBox
              label={item}
              onCheckHandler={
                releaseList[0] === item ? toggleReleaseDates : null
              }
              itemVisibility={releaseList[0] === item ? true : showReleaseDates}
              key={item}
            />
          ))}
          <CountryDropDown />
        </FilterCard>
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
