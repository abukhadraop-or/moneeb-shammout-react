import React from 'react';
import PropTypes from 'prop-types';
import StyledActionDropDown from './action-drop-down.style';

/**
 * Action drop down menu.
 *
 * @param {Object} props   Component props.
 * @param {Element} props.children Children components.
 *
 * @return {Element}
 */
function ActionDropDown({ children }) {
  return <StyledActionDropDown>{children}</StyledActionDropDown>;
}

ActionDropDown.propTypes = {
  /**
   * GOT THIS ERROR WHEN TRYING TO USE PropTypes.element 
   * 
   * react_devtools_backend.js:4026 Warning: Failed prop type: Invalid prop 
   *`children` of type `array` supplied to 
   `ActionDropDown`, expected a single ReactElement.
   */
  children: PropTypes.arrayOf(PropTypes.element),
};

ActionDropDown.defaultProps = {
  children: [],
};

export default ActionDropDown;
