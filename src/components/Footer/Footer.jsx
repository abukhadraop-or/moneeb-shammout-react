import React from 'react';
import Button from 'components/Button/Button';
import StringDropDown from 'components/StringDropDown/StringDropDown';
import LogoContainer from 'components/Logo/LogoContainer';
import {
  basicContent,
  LegalContent,
  communityContent,
  involvedContent,
} from 'constants';
import { StyledFooter, Logo, LeftSide } from './footer.style';

/**
 * Footer component.
 *
 * @return {Element}
 */
function Footer() {
  return (
    <StyledFooter>
      <LeftSide>
        <Logo>
          <LogoContainer logoType="phone" theme="desktopFooter" />
        </Logo>
        <Button
          color="boldBlue"
          fontSize="medium-high"
          fontWeight="bold"
          className="joinCommunity"
          text="JOIN THE COMMUNITY"
        />
      </LeftSide>
      <div>
        <Button
          color="white"
          fontSize="medium-high"
          fontWeight="bold"
          className="footerTitles"
          text="THE BASICS"
        />
        <StringDropDown
          content={basicContent}
          visibility
          dropType="footerDrops"
          theme={{
            className: 'footerDrops',
            color: 'white',
            fontSize: 'medium-low',
            fontWeight: 'medium',
          }}
        />
      </div>
      <div>
        <Button
          color="white"
          fontSize="medium-high"
          fontWeight="bold"
          className="footerTitles"
          text="GET INVOLVED"
        />
        <StringDropDown
          content={involvedContent}
          visibility
          dropType="footerDrops"
          theme={{
            className: 'footerDrops',
            color: 'white',
            fontSize: 'medium-low',
            fontWeight: 'medium',
          }}
        />
      </div>
      <div>
        <Button
          color="white"
          fontSize="medium-high"
          fontWeight="bold"
          className="footerTitles"
          text="COMMUNITY"
        />
        <StringDropDown
          content={communityContent}
          visibility
          dropType="footerDrops"
          theme={{
            className: 'footerDrops',
            color: 'white',
            fontSize: 'medium-low',
            fontWeight: 'medium',
          }}
        />
      </div>
      <div>
        <Button
          color="white"
          fontSize="medium-high"
          fontWeight="bold"
          className="footerTitles"
          text="LEGAL"
        />
        <StringDropDown
          content={LegalContent}
          visibility
          dropType="footerDrops"
          theme={{
            className: 'footerDrops',
            color: 'white',
            fontSize: 'medium-low',
            fontWeight: 'medium',
          }}
        />
      </div>
    </StyledFooter>
  );
}

export default Footer;
