import React, { useState } from 'react';

import LogoContainer from 'Components/Logo/LogoContainer';
import Icon from 'Components/Icon/Icon';
import PhoneSideMenu from 'Components/PhoneSideMenu/PhoneSideMenu';
import Button from 'Components/Button/Button';
import SearchPanel from 'Components/SearchPanel/SearchPanel';
import DesktopMenu from 'Components/DesktopMenu/DesktopMenu';
import DropDownMenu from 'Components/StringDropDown/StringDropDown';
import UserUtilities from 'Components/ActionDropDown/ActionDropDown';

import {
  Header,
  StyledNavBar,
  RightIconsWrapper,
  DesktopLeftWrapper,
  DesktopNavBar,
} from './NavBar.Style';

/**
 *  Create nav bar component wrapped by a header.
 * @return {JSX}   NavBar component.
 */

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showUserUtilities, setShowUserUtilities] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  // desktop states
  const [showPlusDrop, setShowPlusDrop] = useState(false);
  /**
   *  show or hide side menu using state on click
   * @return null
   */
  const sideMenuClickHandler = () => {
    setShowMenu((prevState) => !prevState);
  };
  /**
   *  show or hide user menu using state on click
   * @return null
   */
  const userUtilitiesClickHandler = () => {
    setShowUserUtilities((prevState) => !prevState);
  };
  /**
   *  show or hide search menu using state on click
   * @return null
   */
  const searchIconClickHandler = () => {
    setShowSearch((prevState) => !prevState);
  };
  const plusClickHandler = () => {
    setShowPlusDrop((prevState) => !prevState);
  };
  return (
    <>
      <Header>
        <StyledNavBar>
          <Icon iconName="HiOutlineMenu" onClick={sideMenuClickHandler} />
          <LogoContainer logoType="phone" />
          <RightIconsWrapper>
            <Icon
              iconName="HiUser"
              onClick={userUtilitiesClickHandler}
              onBlur={userUtilitiesClickHandler}
            />
            &nbsp; &nbsp;
            <Icon
              iconName={showSearch ? 'AiOutlineClose' : 'HiSearch'}
              color={showSearch ? 'white' : 'blue'}
              onClick={searchIconClickHandler}
            />
          </RightIconsWrapper>
        </StyledNavBar>

        <DesktopNavBar>
          {/* left wrapper */}
          <DesktopLeftWrapper>
            <LogoContainer logoType="desktop" theme="desktopNav" />
            <DesktopMenu />
          </DesktopLeftWrapper>

          {/* right wrapper */}
          <RightIconsWrapper>
            <div>
              <Icon
                iconName="BiPlus"
                color="white"
                onClick={plusClickHandler}
                className="plus"
              />
              {showPlusDrop && (
                <DropDownMenu
                  visibility
                  content={[
                    'Cant find  a movie or tv show',
                    'login or create one',
                  ]}
                  dropType="navDrops"
                  theme="smallBlack"
                />
              )}
            </div>
            <Button text="EN" theme="language" />
            <Button text="Login" theme="smallDesktopWhite" />
            <Button text="Join TMDB" theme="smallDesktopWhite" />
            <Icon
              iconName={showSearch ? 'AiOutlineClose' : 'HiSearch'}
              color={showSearch ? 'white' : 'blue'}
              onClick={searchIconClickHandler}
              className="search"
            />
          </RightIconsWrapper>
        </DesktopNavBar>
      </Header>

      {showUserUtilities && (
        <UserUtilities>
          <Button key="sign's in" text="Login" theme="smallDarkGrey" />
          <Button key=" sign's out" text="Signup" theme="smallDarkGrey" />
        </UserUtilities>
      )}
      {showSearch && <SearchPanel />}

      <PhoneSideMenu showMenu={showMenu} />
    </>
  );
}

export default NavBar;
