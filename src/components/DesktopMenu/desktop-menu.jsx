import React, { useState } from 'react';
import Button from 'components/Button/button';
import DropDownMenu from 'components/StringDropDown/string-drop-down';
import {
  moviesContent,
  tvContent,
  visibleContent,
  peopleContent,
} from 'constants';
import StyledDesktopMenu from './desktop-menu.style';

/**
 * Navbar drop downs for desktop only.
 *
 * @return {Element}
 */
function DesktopMenu() {
  const [showState, setShowState] = useState({
    more: false,
    movies: false,
    people: false,
    tv: false,
  });

  /**
   * Handles  hover event on the button to display drop down.
   *
   * @param {string } category  Category name to show.
   */
  const onHoverHandler = (category) => {
    setShowState((prevState) => {
      const newData = {
        ...prevState,
        [category]: !prevState[category],
      };
      return newData;
    });
  };

  return (
    <StyledDesktopMenu>
      <div>
        <Button
          theme="smallDesktopWhite"
          text="Movies"
          onHover={() => onHoverHandler('movies')}
          onBlur={() => onHoverHandler('movies')}
        />

        <DropDownMenu
          visibility={showState.movies}
          onHover={() => onHoverHandler('movies')}
          onBlur={() => onHoverHandler('movies')}
          content={moviesContent}
          theme="navDrops"
          dropType="navDrops"
        />
      </div>
      <div>
        <Button
          theme="smallDesktopWhite"
          text="TV Shows"
          onHover={() => onHoverHandler('tv')}
          onBlur={() => onHoverHandler('tv')}
        />
        <DropDownMenu
          visibility={showState.tv}
          content={tvContent}
          theme="navDrops"
          dropType="navDrops"
        />
      </div>
      &nbsp;&nbsp;
      <div>
        <Button
          theme="smallDesktopWhite"
          text="People"
          onHover={() => onHoverHandler('people')}
          onBlur={() => onHoverHandler('people')}
        />

        <DropDownMenu
          visibility={showState.people}
          theme="navDrops"
          content={peopleContent}
          dropType="navDrops"
        />
      </div>
      &nbsp;&nbsp;
      <div>
        <Button
          theme="smallDesktopWhite"
          text="More"
          onHover={() => onHoverHandler('more')}
          onBlur={() => onHoverHandler('more')}
        />

        <DropDownMenu
          visibility={showState.more}
          theme="navDrops"
          content={visibleContent}
          dropType="navDrops"
        />
      </div>
    </StyledDesktopMenu>
  );
}

export default DesktopMenu;
