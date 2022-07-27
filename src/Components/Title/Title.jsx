import { React, PropTypes } from 'reuse/Packages';
import StyledTitle from './Title.Style';
/**
 * @description return Title component
 * @param {String} title  title text
 * @param {String} theme  title theme
 * @param {element} children  children components
 * @returns {JSX}  Title component
 */
function Title({ title, theme, children }) {
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
