import React from 'react';
import PropTypes from 'prop-types';

import Image from 'Components/Image/Image';
import PhoneLogoPath from 'Assets/Images/Logo.jpg';
import { desktopLogo } from 'Constants/URL';

import StyledLogoContainer from './Logo.Container.Style';

/**
 *  Create Logo Container with Logo inside.
 * @param {object} props   Component variables.
 * @param {String} props.logoType Phone or mobile.
 * @param {String} props.theme Theme type.
 * @return {JSX}  LogoContainer.
 */

function LogoContainer({ logoType, theme }) {
  const logo = logoType === 'phone' ? PhoneLogoPath : desktopLogo;
  return (
    <StyledLogoContainer theme={theme}>
      <Image imagePath={logo} />
    </StyledLogoContainer>
  );
}

LogoContainer.propTypes = {
  logoType: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

LogoContainer.defaultProps = {
  theme: '',
};

export default LogoContainer;
