import React, { useState } from 'react';
import Button from 'components/Button/Button';
import DropDownMenu from 'components/StringDropDown/StringDropDown';
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
          className="navRoutes"
          color="white"
          fontSize="medium"
          fontWeight="medium-high"
          text="Movies"
          onHover={() => onHoverHandler('movies')}
          onBlur={() => onHoverHandler('movies')}
        />

        <DropDownMenu
          visibility={showState.movies}
          onHover={() => onHoverHandler('movies')}
          onBlur={() => onHoverHandler('movies')}
          content={moviesContent}
          theme={{
            className: 'dropDown',
            color: 'black',
            fontSize: 'medium',
            fontWeight: 'medium',
          }}
          dropType="navDrops"
        />
      </div>
      <div>
        <Button
          className="navRoutes"
          color="white"
          fontSize="medium"
          fontWeight="medium-high"
          text="TV Shows"
          onHover={() => onHoverHandler('tv')}
          onBlur={() => onHoverHandler('tv')}
        />
        <DropDownMenu
          visibility={showState.tv}
          content={tvContent}
          theme={{
            className: 'dropDown',
            color: 'black',
            fontSize: 'medium',
            fontWeight: 'medium',
          }}
          dropType="navDrops"
        />
      </div>
      &nbsp;&nbsp;
      <div>
        <Button
          className="navRoutes"
          color="white"
          fontSize="medium"
          fontWeight="medium-high"
          text="People"
          onHover={() => onHoverHandler('people')}
          onBlur={() => onHoverHandler('people')}
        />

        <DropDownMenu
          visibility={showState.people}
          theme={{
            className: 'dropDown',
            color: 'black',
            fontSize: 'medium',
            fontWeight: 'medium',
          }}
          content={peopleContent}
          dropType="navDrops"
        />
      </div>
      &nbsp;&nbsp;
      <div>
        <Button
          className="navRoutes"
          color="white"
          fontSize="medium"
          fontWeight="medium-high"
          text="More"
          onHover={() => onHoverHandler('more')}
          onBlur={() => onHoverHandler('more')}
        />

        <DropDownMenu
          visibility={showState.more}
          theme={{
            className: 'dropDown',
            color: 'black',
            fontSize: 'medium',
            fontWeight: 'medium',
          }}
          content={visibleContent}
          dropType="navDrops"
        />
      </div>
    </StyledDesktopMenu>
  );
}

export default DesktopMenu;
