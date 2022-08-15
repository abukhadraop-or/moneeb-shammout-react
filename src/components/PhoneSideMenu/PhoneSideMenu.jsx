import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import DropDownMenu from 'components/StringDropDown/StringDropDown';
import {
  moviesContent,
  tvContent,
  visibleContent,
  peopleContent,
} from 'constants';
import StyledPhoneMenu from './phone-side-menu.style';

/**
 * Phone Side Menu component.
 *
 * @param {Object} props Component props.
 * @param {boolean} props.showMenu Show or hide menu.
 *
 * @return {Element}
 */
function PhoneSideMenu({ showMenu }) {
  const [showState, setShowState] = useState({
    movies: false,
    people: false,
    tv: false,
  });
  const phoneMenu = useRef('');

  /**
   * Show or hide drop downs using setShowState.
   *
   * @param {string} menuName  Menu unique identifier.
   */
  const dropDownHandler = (menuName) => {
    setShowState((prevState) => {
      const newData = { ...prevState, [menuName]: !prevState[menuName] };
      return newData;
    });
  };

  return (
    <StyledPhoneMenu showMenu={showMenu} ref={phoneMenu} id="phoneSideMenu">
      <Button
        color="white"
        fontSize="nearly-big"
        fontWeight="medium-high"
        className="dropButtons"
        onClick={() => dropDownHandler('movies')}
        text="Movies"
      />
      <DropDownMenu
        visibility={showState.movies}
        content={moviesContent}
        theme={{
          className: 'sideDrops',
          color: 'white',
          fontSize: 'medium',
          fontWeight: 'medium',
        }}
      />
      <Button
        color="white"
        fontSize="nearly-big"
        fontWeight="medium-high"
        className="dropButtons"
        onClick={() => dropDownHandler('tv')}
        text="TV Shows"
      />
      <DropDownMenu
        visibility={showState.tv}
        content={tvContent}
        theme={{
          className: 'sideDrops',
          color: 'white',
          fontSize: 'medium',
          fontWeight: 'medium',
        }}
      />
      <Button
        color="white"
        fontSize="nearly-big"
        fontWeight="medium-high"
        className="dropButtons"
        onClick={() => dropDownHandler('people')}
        text="People"
      />
      <DropDownMenu
        visibility={showState.people}
        content={peopleContent}
        theme={{
          className: 'sideDrops',
          color: 'white',
          fontSize: 'medium',
          fontWeight: 'medium',
        }}
      />
      <DropDownMenu
        visibility
        content={visibleContent}
        theme={{
          className: 'smallFade',
          color: 'white',
          fontSize: 'medium',
          fontWeight: 'medium-high',
        }}
      />
    </StyledPhoneMenu>
  );
}

PhoneSideMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
};

export default PhoneSideMenu;
