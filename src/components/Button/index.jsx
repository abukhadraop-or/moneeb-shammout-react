import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './button.style';

/**
 * Button component.
 *
 * @param {Object} props Component props.
 * @param {Array<Element>} props.children Button Children.
 * @param {string} props.color Button color.
 * @param {boolean} props.disabled Button state enabled or disabled.
 * @param {string} props.fontSize Button font size.
 * @param {string} props.fontWeight Button font weight.
 * @param {Function} props.onBlur Blur event handler.
 * @param {Function} props.onClick Click event handler.
 * @param {Function} props.onHover Hover event handler.
 * @param {string} props.text Text inside the button.
 *
 * @return {Element}
 */
function Button({
  children,
  className,
  color,
  disabled,
  fontSize,
  fontWeight,
  onBlur,
  onClick,
  onHover,
  text,
}) {
  return (
    <StyledButton
      disabled={disabled ? true : null}
      onClick={onClick}
      onMouseOver={onHover}
      onMouseOut={onBlur}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      className={className}
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
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onHover: PropTypes.func,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  children: [],
  className: null,
  color: 'black',
  disabled: false,
  fontSize: 'small',
  fontWeight: 'light',
  onBlur: null,
  onClick: null,
  onHover: null,
};

export default Button;
