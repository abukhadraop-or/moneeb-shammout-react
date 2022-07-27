import { React } from 'reuse/Packages';
import Button from 'Components/Button/Button';
import StringDropDown from 'Components/StringDropDown/StringDropDown';
import LogoContainer from 'Components/Logo/LogoContainer';
import StyledFooter from './FooterStyle';
import StyledDesktopLogo from './DesktopLogoStyle';
import StyledDesktopLeftSide from './DesktopLeftSideStyle';

const basicContent = [
  'About TMDB',
  'Contact Us',
  'Support Forums',
  'API',
  'System Status',
];
const involvedContent = [
  'Contribution Bible',
  'ADd new movie',
  'Add new TV show',
];
const communityContent = ['Guidlines', 'Discusions', 'Leaderboard', 'Twitter'];
const LegalContent = ['Terms OF Use', 'API Terms OF Use', 'Privacy Policy'];

/**
 * @description return Footer component
 * @returns {JSX}  Image component
 */

function Footer() {
  return (
    <StyledFooter>
      <StyledDesktopLeftSide>
        <StyledDesktopLogo>
          <LogoContainer logoType="phone" theme="desktopFooter" />
        </StyledDesktopLogo>
        <Button theme="bigWhiteBlue" text="JOIN THE COMMUNITY" />
      </StyledDesktopLeftSide>
      <div>
        <Button theme="bigWhite" text="THE BASICS" />
        <StringDropDown content={basicContent} visibility />
      </div>
      <div>
        <Button theme="bigWhite" text="GET INVOLVED" />
        <StringDropDown content={involvedContent} visibility />
      </div>
      <div>
        <Button theme="bigWhite" text="COMMUNITY" />
        <StringDropDown content={communityContent} visibility />
      </div>
      <div>
        <Button theme="bigWhite" text="LEGAL" />
        <StringDropDown content={LegalContent} visibility />
      </div>
    </StyledFooter>
  );
}

export default Footer;
