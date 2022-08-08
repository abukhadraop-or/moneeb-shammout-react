import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon/icon';

import StyledSSearchPredictions from './SearchPredictions.Style';

/**
 *  Create trending div in search panel.
 * @param {Object} props Component props.
 * @param {String} props.prediction Prediction text.
 * @param {String} props.bottomBorder Show or hide bottom border.
 * @return {Element}  SearchPrediction Component.
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
