import { React, PropTypes } from 'reuse/Packages';
import Image from 'Components/Image/Image';
import PhoneLogoPath from 'assets/images/logo.jpg';
import * as constants from 'reuse/Constants';
import StyledLogoContainer from 'Components/Logo/Logo.Container.Style';

/**
 * @description return Logo Container with Logo inside
 *@param {String} logoType phone or mobile
 *@param {String} theme theme type
 * @returns {JSX}  Logo Container component
 */
function LogoContainer({ logoType, theme }) {
  const logo = logoType === 'phone' ? PhoneLogoPath : constants.Desktop_Logo;
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
