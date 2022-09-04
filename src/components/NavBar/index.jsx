import React, { useState } from 'react';
import LogoContainer from 'components/Logo';
import Icon from 'components/Icon';
import PhoneSideMenu from 'components/PhoneSideMenu';
import Button from 'components/Button';
import SearchPanel from 'components/SearchPanel';
import DesktopMenu from 'components/DesktopMenu';
import UserUtilities from 'components/ActionDropDown';
import {
  DesktopNavBar,
  Header,
  LanguageButton,
  LeftWrapper,
  PlusIcon,
  RightIconsWrapper,
  RightRoutesDrop,
  SearchIcon,
  StyledNavBar,
  UtilityButton,
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
            <Icon
              iconName={showSearch ? 'AiOutlineClose' : 'HiSearch'}
              color={showSearch ? 'white' : 'blue'}
              onClick={searchIconClickHandler}
            />
          </RightIconsWrapper>
        </StyledNavBar>

        <DesktopNavBar>
          {/* left wrapper */}
          <LeftWrapper>
            <LogoContainer logoType="desktop" theme="desktopNav" />
            <DesktopMenu />
          </LeftWrapper>

          {/* right wrapper */}
          <RightIconsWrapper>
            <div>
              <PlusIcon
                iconName="BiPlus"
                color="white"
                onClick={plusClickHandler}
              />
              {showPlusDrop && (
                <RightRoutesDrop
                  visibility
                  content={[
                    'Cant find  a movie or tv show',
                    'login or create one',
                  ]}
                  dropType="navDrops"
                  theme={{
                    color: 'black',
                    fontSize: 'medium',
                    fontWeight: 'medium',
                  }}
                />
              )}
            </div>
            <LanguageButton text="EN" color="white" fontWeight="medium" />
            <Button
              text="Login"
              color="white"
              fontSize="medium"
              fontWeight="medium-high"
            />
            <Button
              text="Join TMDB"
              color="white"
              fontSize="medium"
              fontWeight="medium-high"
            />
            <SearchIcon
              iconName={showSearch ? 'AiOutlineClose' : 'HiSearch'}
              color={showSearch ? 'white' : 'blue'}
              onClick={searchIconClickHandler}
            />
          </RightIconsWrapper>
        </DesktopNavBar>
        {showUserUtilities && (
          <UserUtilities>
            <UtilityButton
              key="sign's in"
              text="Login"
              color="fontGrey"
              fontWeight="medium-high"
            />
            <UtilityButton
              key=" sign's out"
              text="Signup"
              color="fontGrey"
              fontWeight="medium-high"
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
