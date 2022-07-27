import { React, PropTypes } from 'reuse/Packages';
import StyledButton from './Button.Style';
/**
 * @description return Button component depending on the theme chosed
 * @param {string} theme   name of the theme
 * @param {string} text    text inside the button
 * @param {Function} onClick on click handler
 * @param {Function} onHoverHandler on hover handler
 * @param {boolean} disabled  button state enabled or disabled
 * @returns {JSX}  Button component
 */
function Button({ theme, onClick, text, disabled, onHoverHandler }) {
  if (disabled) {
    return (
      <StyledButton theme={theme} onClick={onClick} disabled>
        {text}
      </StyledButton>
    );
  }
  return (
    <StyledButton
      theme={theme}
      onClick={onClick}
      onMouseOver={onHoverHandler}
      onMouseOut={onHoverHandler}
    >
      {text}
    </StyledButton>
  );
}
Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onHoverHandler: PropTypes.func,
  text: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};
Button.defaultProps = {
  disabled: false,
  onClick: null,
  onHoverHandler: null,
};

export default Button;
