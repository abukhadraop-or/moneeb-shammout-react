import React from 'react';
import SearchBox from 'components/SearchBox/search-box';
import TrendingDiv from 'components/TrendingDiv/trending-div';
import SearchPredictions from 'components/SearchPredictions/search-predictions';
import { predictionsList } from 'constants';
import StyledSearchPanel from './search-panel.style';

/**
 * Search Panel Component.
 *
 * @return {Element}
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
