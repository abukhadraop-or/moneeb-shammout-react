import React from 'react';
import PropTypes from 'prop-types';

import StyledTitle from './Title.Style';

/**
 *  return Title component
 * @param {Object} props Component props.
 * @param {element} props.children  children components
 * @param {String} props.theme  title theme
 * @param {String} props.title  title text
 * @return {Element}  Title component
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
