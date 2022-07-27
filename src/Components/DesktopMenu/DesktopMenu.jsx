import { React, useState, PropTypes } from 'reuse/Packages';
import * as constants from 'reuse/Constants';
import Button from 'Components/Button/Button';
import DropDownMenu from 'Components/StringDropDown/StringDropDown';
import StyledDesktopMenu from './DesktopMenuStyle';

/**
 * @description renders nav bar left content
 *
 * @returns {JSX}
 */
function DesktopMenu() {
  const [showState, setShowState] = useState({
    more: false,
    movies: false,
    people: false,
    tv: false,
  });
  /**
   * @description renders nav bar left content
   * @param {string } category to show or hide
   * @returns {JSX}
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
  onHoverHandler.PropTypes = {
    category: PropTypes.string.isRequired,
  };
  return (
    <StyledDesktopMenu>
      <div>
        <Button
          theme="smallDesktopWhite"
          text="Movies"
          onHoverHandler={() => onHoverHandler('movies')}
        />
        {showState.movies && (
          <DropDownMenu
            visibility
            content={constants.moviesContent}
            theme="smallBlack"
            dropType="navDrops"
          />
        )}
      </div>
      <div>
        <Button
          theme="smallDesktopWhite"
          text="TV Shows"
          onHoverHandler={() => onHoverHandler('tv')}
        />
        {showState.tv && (
          <DropDownMenu
            visibility
            content={constants.tvContent}
            theme="smallBlack"
            dropType="navDrops"
          />
        )}
      </div>
      <div>
        <Button
          theme="smallDesktopWhite"
          text="People"
          onHoverHandler={() => onHoverHandler('people')}
        />
        {showState.people && (
          <DropDownMenu
            visibility
            theme="smallBlack"
            content={constants.peopleContent}
            dropType="navDrops"
          />
        )}
      </div>
      <div>
        <Button
          theme="smallDesktopWhite"
          text="More"
          onHoverHandler={() => onHoverHandler('more')}
        />
        {showState.more && (
          <DropDownMenu
            visibility
            theme="smallBlack"
            content={constants.visibleContent}
            dropType="navDrops"
          />
        )}
      </div>
    </StyledDesktopMenu>
  );
}
export default DesktopMenu;
