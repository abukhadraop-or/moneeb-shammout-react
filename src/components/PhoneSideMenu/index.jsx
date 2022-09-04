import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  moviesContent,
  peopleContent,
  tvContent,
  visibleContent,
} from 'constants';
import {
  DropButton,
  SideDrop,
  SmallFadeDrop,
  StyledPhoneMenu,
} from './phone-side-menu.style';

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
   * @param {string} menuName Menu unique identifier.
   */
  const dropDownHandler = (menuName) => {
    setShowState((prevState) => {
      const newData = { ...prevState, [menuName]: !prevState[menuName] };
      return newData;
    });
  };

  return (
    <StyledPhoneMenu showMenu={showMenu} ref={phoneMenu} id="phoneSideMenu">
      <DropButton
        color="white"
        fontSize="nearly-big"
        fontWeight="medium-high"
        onClick={() => dropDownHandler('movies')}
        text="Movies"
      />
      <SideDrop
        visibility={showState.movies}
        content={moviesContent}
        theme={{
          color: 'white',
          fontSize: 'medium',
          fontWeight: 'medium',
        }}
      />
      <DropButton
        color="white"
        fontSize="nearly-big"
        fontWeight="medium-high"
        onClick={() => dropDownHandler('tv')}
        text="TV Shows"
      />
      <SideDrop
        visibility={showState.tv}
        content={tvContent}
        theme={{
          color: 'white',
          fontSize: 'medium',
          fontWeight: 'medium',
        }}
      />
      <DropButton
        color="white"
        fontSize="nearly-big"
        fontWeight="medium-high"
        onClick={() => dropDownHandler('people')}
        text="People"
      />
      <SideDrop
        visibility={showState.people}
        content={peopleContent}
        theme={{
          color: 'white',
          fontSize: 'medium',
          fontWeight: 'medium',
        }}
      />
      <SmallFadeDrop
        visibility
        content={visibleContent}
        theme={{
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
