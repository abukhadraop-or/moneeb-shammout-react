import React from 'react';
import PropTypes from 'prop-types';
import Image from 'components/Image/Image';
import PhoneLogoPath from 'assets/images/logo.jpg';
import { urls } from 'constants';
import StyledLogoContainer from './logo-container.style';

/**
 * Logo Container.
 *
 * @param {Object} props Component props.
 * @param {string} props.logoType Phone or mobile.
 * @param {string} props.theme Theme type.
 *
 * @return {Element}
 */
function LogoContainer({ logoType, theme }) {
  const logo = logoType === 'phone' ? PhoneLogoPath : urls.desktopLogo;
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
