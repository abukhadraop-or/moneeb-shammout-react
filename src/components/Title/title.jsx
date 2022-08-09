import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './title.style';

/**
 * Title component.
 *
 * @param {Object} props Component props.
 * @param {Element} props.children  Children components.
 * @param {String} props.theme  Title theme.
 * @param {String} props.title  Title text.
 *
 * @return {Element}
 */
function Title({ children, theme, title }) {
  return (
    <StyledTitle theme={theme}>
      {title}
      &nbsp;
      {children ?? ''}
    </StyledTitle>
  );
}

Title.propTypes = {
  children: PropTypes.element,
  theme: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Title.defaultProps = {
  children: null,
};

export default Title;
