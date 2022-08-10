import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './title.style';

/**
 * Title component.
 *
 * @param {Object} props Component props.
 * @param {Element} props.children  Children components.
 * @param {string} props.className  Title class for external styling.
 * @param {string} props.color  Title color.
 * @param {string} props.fontSize  Title font size.
 * @param {string} props.fontWeight  Title font weight.
 * @param {string} props.title  Title text.
 *
 * @return {Element}
 */
function Title({ children, className, color, fontSize, fontWeight, title }) {
  return (
    <StyledTitle
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      className={className}
    >
      {title}
      &nbsp;
      {children ?? ''}
    </StyledTitle>
  );
}

Title.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Title.defaultProps = {
  children: null,
  className: null,
  color: 'black',
  fontSize: 'small',
  fontWeight: 'light',
};

export default Title;
