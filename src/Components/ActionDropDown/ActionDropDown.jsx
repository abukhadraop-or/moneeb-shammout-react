import React from 'react';
import PropTypes from 'prop-types';

import StyledActionDropDown from './ActionDropDown.Style';

/**
 *  Create Logo Container with Logo inside
 * @param {object} props   Component variables.
 * @param {String} props.Children Children jsx
 * @param {String} props.theme theme type
 * @return {JSX}  ActionDropDown.
 */

function ActionDropDown({ children }) {
  return <StyledActionDropDown>{children}</StyledActionDropDown>;
}

ActionDropDown.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
ActionDropDown.defaultProps = {
  children: [],
};
export default ActionDropDown;
