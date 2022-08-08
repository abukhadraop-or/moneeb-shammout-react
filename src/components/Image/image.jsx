import React from 'react';
import PropTypes from 'prop-types';
import StyledImage from './image.style';

/**
 * Image component.
 *
 * @param {Object} props   Component props.
 * @param {string} props.className   Element class for css.
 * @param {string} props.imagePath   Absolute path of the Image.
 *
 * @return {Element}
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
