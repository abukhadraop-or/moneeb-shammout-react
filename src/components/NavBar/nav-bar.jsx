import React, { useState } from 'react';
import LogoContainer from 'components/Logo/logo-container';
import Icon from 'components/Icon/icon';
import PhoneSideMenu from 'components/PhoneSideMenu/phon-side-menu';
import Button from 'components/Button/button';
import SearchPanel from 'components/SearchPanel/search-panel';
import DesktopMenu from 'components/DesktopMenu/desktop-menu';
import DropDownMenu from 'components/StringDropDown/string-drop-down';
import UserUtilities from 'components/ActionDropDown/action-drop-down';
import {
  Header,
  StyledNavBar,
  RightIconsWrapper,
  DesktopLeftWrapper,
  DesktopNavBar,
} from './nav-bar.style';

/**
 * Navbar component wrapped by a header.
 *
 * @return {Element}
 */
function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showUserUtilities, setShowUserUtilities] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  // desktop states
  const [showPlusDrop, setShowPlusDrop] = useState(false);

  /**
   * Show or hide side menu using state on click.
   */
  const toggleSideMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  /**
   * Show or hide user menu using state on click.
   */
  const toggleUserUtilities = () => {
    setShowUserUtilities((prevState) => !prevState);
  };

  /**
   * Show or hide search menu using state on click.
   */
  const searchIconClickHandler = () => {
    setShowSearch((prevState) => !prevState);
  };

  /**
   * Show or hide plus menu using state on click.
   */
  const plusClickHandler = () => {
    setShowPlusDrop((prevState) => !prevState);
  };

  return (
    <>
      <Header>
        <StyledNavBar>
          <Icon iconName="HiOutlineMenu" onClick={toggleSideMenu} />
          <LogoContainer logoType="phone" />
          <RightIconsWrapper>
            <Icon
              iconName="HiUser"
              onClick={toggleUserUtilities}
              onBlur={toggleUserUtilities}
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
                  theme={{
                    className: 'rightRoutes',
                    color: 'black',
                    fontSize: 'medium',
                    fontWeight: 'medium',
                  }}
                />
              )}
            </div>
            <Button
              text="EN"
              className="languageButton"
              color="white"
              fontWeight="medium"
            />
            <Button
              text="Login"
              className="rightRoutes"
              color="white"
              fontSize="medium"
              fontWeight="medium-high"
            />
            <Button
              text="Join TMDB"
              className="rightRoutes"
              color="white"
              fontSize="medium"
              fontWeight="medium-high"
            />
            <Icon
              iconName={showSearch ? 'AiOutlineClose' : 'HiSearch'}
              color={showSearch ? 'white' : 'blue'}
              onClick={searchIconClickHandler}
              className="search"
            />
          </RightIconsWrapper>
        </DesktopNavBar>
        {showUserUtilities && (
          <UserUtilities>
            <Button
              key="sign's in"
              text="Login"
              color="fontGrey"
              fontWeight="medium-high"
              className="utilityButton"
            />
            <Button
              key=" sign's out"
              text="Signup"
              color="fontGrey"
              fontWeight="medium-high"
              className="utilityButton"
            />
          </UserUtilities>
        )}
      </Header>

      {showSearch && <SearchPanel />}

      <PhoneSideMenu showMenu={showMenu} />
    </>
  );
}

export default NavBar;
