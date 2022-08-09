import React from 'react';
import PropTypes from 'prop-types';
import StyledToolTip from './tool-tip.style';

/**
 * ToolTip component.
 *
 * @param {Object} props   Component props.
 * @param {string} props.className   Tool tip class for css.
 * @param {string} props.text   Tool tip text.
 * @param {string} props.theme   Tool tip theme.
 *
 * @return {Element}  .
 */
function ToolTip({ className, text, theme }) {
  return (
    <StyledToolTip className={className} theme={theme}>
      {text}
    </StyledToolTip>
  );
}

ToolTip.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

ToolTip.defaultProps = {
  className: '',
};

export default ToolTip;
