import React from 'react';
import PropTypes from 'prop-types';

import StyledImage from './Image.Style';

/**
 *  Create Image component.
 * @param {object} props   Component variables.
 * @param {string} props.className   element class for css.
 * @param {string} props.imagePath   Absolute path of the Image.
 * @return {JSX}  Image.
 */
function Image({ className, imagePath }) {
  return (
    <StyledImage>
      <img
        src={imagePath}
        alt=" not found"
        loading="lazy"
        className={className}
      />
    </StyledImage>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  imagePath: PropTypes.string.isRequired,
};
Image.defaultProps = {
  className: '',
};

export default Image;
