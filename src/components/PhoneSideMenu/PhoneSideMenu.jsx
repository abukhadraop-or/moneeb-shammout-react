import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button/button';
import DropDownMenu from 'components/StringDropDown/StringDropDown';

import {
  moviesContent,
  tvContent,
  visibleContent,
  peopleContent,
} from 'Constants/Content';
import StyledPhoneMenu from './menu.style';

/**
 *  Create Phone Side Menu component.
 * @param {Object} props Component props.
 * @param {boolean} props.showMenu if true otherwise hide.
 * @return {Element}  PhoneSideMenu component.
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
   * @param {String} menuName  Menu unique identifier.
   */

  const dropDownHandler = (menuName) => {
    setShowState((prevState) => {
      const newData = { ...prevState, [menuName]: !prevState[menuName] };
      return newData;
    });
  };

  const component = (
    <StyledPhoneMenu showMenu={showMenu} ref={phoneMenu} id="phoneSideMenu">
      <Button
        theme="bigWhite"
        onClick={() => dropDownHandler('movies')}
        text="Movies"
      />
      <DropDownMenu visibility={showState.movies} content={moviesContent} />
      <Button
        theme="bigWhite"
        onClick={() => dropDownHandler('tv')}
        text="TV Shows"
      />
      <DropDownMenu visibility={showState.tv} content={tvContent} />
      <Button
        theme="bigWhite"
        onClick={() => dropDownHandler('people')}
        text="People"
      />
      <DropDownMenu visibility={showState.people} content={peopleContent} />
      <DropDownMenu visibility content={visibleContent} theme="smallFade" />
    </StyledPhoneMenu>
  );
  return component;
}

PhoneSideMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
};

export default PhoneSideMenu;
