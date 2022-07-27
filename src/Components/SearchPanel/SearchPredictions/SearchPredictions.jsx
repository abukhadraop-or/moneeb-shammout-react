import { React, PropTypes } from 'reuse/Packages';
import Icon from 'Components/Icon/Icon';
import StyledSSearchPredictions from './SearchPredictions.Style';
/**
 * @description renders trending div in search panel
 * @param {String} prediction prediction text
 * @returns {JSX}  trending div
 */
function SearchPrediction({ prediction, bottomBorder }) {
  return (
    <StyledSSearchPredictions bottomBorder={bottomBorder}>
      <Icon iconName="HiSearch" color="grey" />
      &nbsp;
      <span>{prediction}</span>
    </StyledSSearchPredictions>
  );
}
SearchPrediction.propTypes = {
  bottomBorder: PropTypes.bool,
  prediction: PropTypes.string.isRequired,
};
SearchPrediction.defaultProps = {
  bottomBorder: false,
};
export default SearchPrediction;
