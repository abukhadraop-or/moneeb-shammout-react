import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import StyledSSearchPredictions from './search-predictions.style';

/**
 * Search prediction component in search panel.
 *
 * @param {Object} props Component props.
 * @param {string} props.prediction Prediction text.
 * @param {string} props.bottomBorder Show or hide bottom border.
 *
 * @return {Element}
 */
function SearchPrediction({ prediction, bottomBorder }) {
  return (
    <StyledSSearchPredictions bottomBorder={bottomBorder}>
      <Icon iconName="HiSearch" color="grey" />
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
