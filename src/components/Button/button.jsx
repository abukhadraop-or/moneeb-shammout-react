import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './button.style';

/**
 * Button component.
 *
 * @param {Object} props   Component props.
 * @param {Element} props.children  Button Children.
 * @param {boolean} props.disabled  Button state enabled or disabled.
 * @param {Function} props.onBlur Blur event handler.
 * @param {Function} props.onClick Click event handler.
 * @param {Function} props.onHover Hover event handler.
 * @param {string} props.text    Text inside the button.
 * @param {string} props.theme   Name of the theme.
 *
 * @return {Element}
 */
function Button({ children, disabled, onBlur, onClick, onHover, text, theme }) {
  return (
    <StyledButton
      theme={theme}
      disabled={disabled ? true : null}
      onClick={onClick}
      onMouseOver={onHover}
      onMouseOut={onBlur}
    >
      {text}
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onHover: PropTypes.func,
  text: PropTypes.string.isRequired,
  theme: PropTypes.oneOf([
    'bigBlue',
    'bigWhite',
    'bigWhiteBlue',
    'bigWhiteFooter',
    'footerDrops',
    'language',
    'loadMore',
    'movieDropDown',
    'smallBlack',
    'smallDarkGrey',
    'smallDesktopWhite',
    'smallFade',
    'smallWhite',
    'whiteRounded',
  ]),
};

Button.defaultProps = {
  children: [],
  disabled: false,
  onBlur: null,
  onClick: null,
  onHover: null,
  theme: 'bigWhite',
};

export default Button;
