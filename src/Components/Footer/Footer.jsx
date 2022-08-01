import React from 'react';

import Button from 'Components/Button/Button';
import StringDropDown from 'Components/StringDropDown/StringDropDown';
import LogoContainer from 'Components/Logo/LogoContainer';

import {
  basicContent,
  LegalContent,
  communityContent,
  involvedContent,
} from 'Constants/Content';
import { StyledFooter, DesktopLogo, DesktopLeftSide } from './Footer.Style';

/**
 *  Create Footer component.
 * @return {JSX}  Footer.
 */

function Footer() {
  return (
    <StyledFooter>
      <DesktopLeftSide>
        <DesktopLogo>
          <LogoContainer logoType="phone" theme="desktopFooter" />
        </DesktopLogo>
        <Button theme="bigWhiteBlue" text="JOIN THE COMMUNITY" />
      </DesktopLeftSide>
      <div>
        <Button theme="bigWhiteFooter" text="THE BASICS" />
        <StringDropDown
          content={basicContent}
          visibility
          dropType="footerDrops"
          theme="footerDrops"
        />
      </div>
      <div>
        <Button theme="bigWhiteFooter" text="GET INVOLVED" />
        <StringDropDown
          content={involvedContent}
          visibility
          dropType="footerDrops"
          theme="footerDrops"
        />
      </div>
      <div>
        <Button theme="bigWhiteFooter" text="COMMUNITY" />
        <StringDropDown
          content={communityContent}
          visibility
          dropType="footerDrops"
          theme="footerDrops"
        />
      </div>
      <div>
        <Button theme="bigWhiteFooter" text="LEGAL" />
        <StringDropDown
          content={LegalContent}
          visibility
          dropType="footerDrops"
          theme="footerDrops"
        />
      </div>
    </StyledFooter>
  );
}

export default Footer;
