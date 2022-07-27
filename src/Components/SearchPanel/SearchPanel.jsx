import { React, PropTypes } from 'reuse/Packages';
import SearchBox from 'Components/SearchBox/SearchBox';
import TrendingDiv from './TrendingDiv/TrendingDiv';
import SearchPredictions from './SearchPredictions/SearchPredictions';
import StyledSearchPanel from './SearchPanel.Style';

const predictionsList = [
  'Jurassic World Dominion',
  'The Black Phone',
  'Lightyear',
  'Thor: Love and Thunder',
  'Resident Evil',
  'Doctor Strange  in the Multivirse Madness',
  'Stranger Things',
  'The Forgiven : Part 2. The Other One',
  'Virgin River',
];
/**
 * @description return TextField component depending on the theme chosed
 * @param {bool} navVisibile   nav bar visibility to shift it up when invisible
 * @returns {JSX}  TextField component
 */
function SearchPanel({ navVisibile }) {
  return (
    <StyledSearchPanel navVisibile={navVisibile}>
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
SearchPanel.propTypes = {
  navVisibile: PropTypes.bool.isRequired,
};

export default SearchPanel;
