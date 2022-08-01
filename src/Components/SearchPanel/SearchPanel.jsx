import React from 'react';

import SearchBox from 'Components/SearchBox/SearchBox';
import TrendingDiv from 'Components/TrendingDiv/TrendingDiv';
import SearchPredictions from 'Components/SearchPredictions/SearchPredictions';

import { predictionsList } from 'Constants/Content';
import StyledSearchPanel from './SearchPanel.Style';

/**
 *  Create TextField component depending on the theme chosen.
 * @return {JSX}  TextField component.
 */

function SearchPanel() {
  return (
    <StyledSearchPanel>
      <SearchBox
        leftIcon="HiSearch"
        rightIcon="AiOutlineClose"
        placeHolder="Search"
      />
      <TrendingDiv />

      {/* if its the last give it a bottom border */}

      {predictionsList.map((pred) =>
        predictionsList.length - 1 === predictionsList.indexOf(pred) ? (
          <SearchPredictions key={pred} prediction={pred} bottomBorder />
        ) : (
          <SearchPredictions key={pred} prediction={pred} />
        )
      )}
    </StyledSearchPanel>
  );
}

export default SearchPanel;
