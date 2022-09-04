import React from 'react';
import StringDropDown from 'components/StringDropDown';
import LogoContainer from 'components/Logo';
import {
  basicContent,
  LegalContent,
  communityContent,
  involvedContent,
} from 'constants';
import {
  StyledFooter,
  Logo,
  LeftSide,
  CommunityButton,
  TitleButton,
} from './footer.style';

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
        <CommunityButton
          color="boldBlue"
          fontSize="medium-high"
          fontWeight="bold"
          text="JOIN THE COMMUNITY"
        />
      </LeftSide>
      <div>
        <TitleButton
          color="white"
          fontSize="medium-high"
          fontWeight="bold"
          text="THE BASICS"
        />
        <StringDropDown
          content={basicContent}
          visibility
          dropType="footerDrops"
          theme={{
            color: 'white',
            fontSize: 'medium-low',
            fontWeight: 'medium',
          }}
        />
      </div>
      <div>
        <TitleButton
          color="white"
          fontSize="medium-high"
          fontWeight="bold"
          text="GET INVOLVED"
        />
        <StringDropDown
          content={involvedContent}
          visibility
          dropType="footerDrops"
          theme={{
            color: 'white',
            fontSize: 'medium-low',
            fontWeight: 'medium',
          }}
        />
      </div>
      <div>
        <TitleButton
          color="white"
          fontSize="medium-high"
          fontWeight="bold"
          text="COMMUNITY"
        />
        <StringDropDown
          content={communityContent}
          visibility
          dropType="footerDrops"
          theme={{
            color: 'white',
            fontSize: 'medium-low',
            fontWeight: 'medium',
          }}
        />
      </div>
      <div>
        <TitleButton
          color="white"
          fontSize="medium-high"
          fontWeight="bold"
          text="LEGAL"
        />
        <StringDropDown
          content={LegalContent}
          visibility
          dropType="footerDrops"
          theme={{
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
