import React from 'react';
import PropTypes from 'prop-types';
import StyledActionDropDown from './action-drop-down.style';

/**
 * Action drop down menu.
 *
 * @param {Object} props   Component props.
 * @param {Array<Element>} props.children Children components.
 *
 * @return {Element}
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
