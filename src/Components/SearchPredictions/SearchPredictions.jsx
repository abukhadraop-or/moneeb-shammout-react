import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'Components/Icon/Icon';

import StyledSSearchPredictions from './SearchPredictions.Style';

/**
 *  Create trending div in search panel.
 * @param {object} props Component variables.
 * @param {String} props.prediction Prediction text.
 * @param {String} props.bottomBorder Show or hide bottom border.
 * @return {JSX}  SearchPrediction Component.
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
