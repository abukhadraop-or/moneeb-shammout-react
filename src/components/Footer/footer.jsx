import React from 'react';
import Button from 'components/Button/button';
import StringDropDown from 'components/StringDropDown/string-drop-down';
import LogoContainer from 'components/Logo/logo-container';
import {
  basicContent,
  LegalContent,
  communityContent,
  involvedContent,
} from 'constants';
import { StyledFooter, DesktopLogo, DesktopLeftSide } from './footer.style';

/**
 * Footer component.
 *
 * @return {Element}
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
