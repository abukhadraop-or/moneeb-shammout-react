import { React, useState, useEffect } from 'reuse/Packages';
import LogoContainer from 'Components/Logo/LogoContainer';
import Icon from 'Components/Icon/Icon';
import PhoneSideMenu from 'Components/PhoneSideMenu/PhoneSideMenu';
import Button from 'Components/Button/Button';
import SearchPanel from 'Components/SearchPanel/SearchPanel';
import DesktopMenu from 'Components/DesktopMenu/DesktopMenu';
import DropDownMenu from 'Components/StringDropDown/StringDropDown';
import RightIconsWrapper from './Right.Wrapper.Style';
import StyledUerUtilites from './User.Utilities.Style';
import { StyledHeader, StyledNavBar } from './NavBar.Style';
import StyledLeftWrapper from './DesktopLeftStyle';
import StyledDesktopNavBar from './DesktopNav.Style';

/**
 * @description return nav bar component wrapped by a header
 * @returns {JSX}   nav bar component
 */
function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showUserUtilities, setshowUserUtilities] = useState(false);
  const [showSearch, setshowSearch] = useState(false);
  const [navVisibile, setNavVisibile] = useState(true);
  // desktop states
  const [showPlusDrop, setShowPlusDrop] = useState(false);
  /**
   * @description listens to user scroll to hide nav bar
   * @returns react APP
   */
  const listenToScroll = () => {
    const heightToHideFrom = 170;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHideFrom) {
      if (navVisibile) setNavVisibile(false);
    } else {
      setNavVisibile(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /**
   * @description show or hide side menu using state on click
   * @return null
   */
  const sideMenuClickHandler = () => {
    setShowMenu((prevState) => !prevState);
  };
  /**
   * @description show or hide user menu using state on click
   * @return null
   */
  const userUtilitiesClickHandler = () => {
    setshowUserUtilities((prevState) => !prevState);
  };
  /**
   * @description show or hide search menu using state on click
   * @return null
   */
  const searchIconClickHandler = () => {
    setshowSearch((prevState) => !prevState);
  };
  const plusClickHandler = () => {
    setShowPlusDrop((prevState) => !prevState);
  };
  return (
    <>
      {navVisibile && (
        <StyledHeader>
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
                color={showSearch ? null : 'blue'}
                onClick={searchIconClickHandler}
              />
            </RightIconsWrapper>
          </StyledNavBar>

          <StyledDesktopNavBar>
            {/* left wrapper */}
            <StyledLeftWrapper>
              <LogoContainer logoType="desktop" theme="desktopNav" />
              <DesktopMenu />
            </StyledLeftWrapper>

            {/* right wrapper */}
            <RightIconsWrapper>
              <div>
                <Icon
                  iconName="HiPlus"
                  color="white"
                  onClick={plusClickHandler}
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
              <Button text="En" theme="language" />
              <Button text="Login" theme="smallDesktopWhite" />
              <Button text="Join TMDB" theme="smallDesktopWhite" />
              <Icon
                iconName={showSearch ? 'AiOutlineClose' : 'HiSearch'}
                color={showSearch ? null : 'blue'}
                onClick={searchIconClickHandler}
              />
            </RightIconsWrapper>
          </StyledDesktopNavBar>
        </StyledHeader>
      )}
      {showUserUtilities && (
        <StyledUerUtilites>
          <Button key="signuserIN" text="Login" theme="smallGrey" />
          <Button key=" signuserOUT" text="Signup" theme="smallGrey" />
        </StyledUerUtilites>
      )}
      {showSearch && <SearchPanel navVisibile={navVisibile} />}
      <PhoneSideMenu showMenu={showMenu} />
    </>
  );
}

export default NavBar;
