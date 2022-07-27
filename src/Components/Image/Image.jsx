import { React, PropTypes } from 'reuse/Packages';

import StyledImage from './Image.Style';

/**
 * @description return Image component
 * @param {string} imagePath   absolute path of the Image
 * @returns {JSX}  Image component
 */
function Image({ imagePath }) {
  return (
    <StyledImage>
      <img src={imagePath} alt="Logo" loading="lazy" />
    </StyledImage>
  );
}
Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
};
export default Image;
