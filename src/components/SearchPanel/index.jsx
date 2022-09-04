import React, { useState } from 'react';
import SearchBox from 'components/SearchBox';
import TrendingDiv from 'components/TrendingDiv';
import SearchPredictions from 'components/SearchPredictions';
import { predictionsList } from 'constants';
import StyledSearchPanel from './search-panel.style';

/**
 * Search Panel Component.
 *
 * @return {Element}
 */
function SearchPanel() {
  const [predictions, setPredictions] = useState(predictionsList);
  const lastItem = predictions[predictions.length - 1];

  /**
   * Filters predictions List based on search text.
   *
   * @param {String} searchText Search query.
   */
  const search = (searchText) => {
    const text = searchText.trim().toUpperCase();
    setPredictions(
      !text
        ? predictionsList
        : predictionsList.filter((pred) => pred.startsWith(text))
    );
  };

  return (
    <StyledSearchPanel>
      <SearchBox
        leftIcon="HiSearch"
        rightIcon="AiOutlineClose"
        placeHolder="Search"
        onChange={search}
      />
      <TrendingDiv />

      {predictions.map((pred) =>
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
