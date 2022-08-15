import React from 'react';
import SearchBox from 'components/SearchBox/SearchBox';
import TrendingDiv from 'components/TrendingDiv/TrendingDiv';
import SearchPredictions from 'components/SearchPredictions/SearchPredictions';
import { predictionsList } from 'constants';
import StyledSearchPanel from './search-panel.style';

/**
 * Search Panel Component.
 *
 * @return {Element}
 */
function SearchPanel() {
  const lastItem = predictionsList[predictionsList.length - 1];
  return (
    <StyledSearchPanel>
      <SearchBox
        leftIcon="HiSearch"
        rightIcon="AiOutlineClose"
        placeHolder="Search"
      />
      <TrendingDiv />

      {predictionsList.map((pred) =>
        lastItem === pred ? (
          <SearchPredictions key={pred} prediction={pred} bottomBorder />
        ) : (
          <SearchPredictions key={pred} prediction={pred} />
        )
      )}
    </StyledSearchPanel>
  );
}

export default SearchPanel;
