import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Icon from 'Components/Icon/Icon';
import StyledFilterVisibleContent from './FilterVisibleContent.Style';

/**
 *  Create Filter visible component.
 * @param {object} props   Component variables.
 * @param {boolean} props.showBorder   Shows bottom border.
 * @param {function} showHiddenContentHandler  External on click handler.
 * @param {String} title  Title text.
 * @return {JSX}  Filter visible component.
 */

function FilterDropDown({ showBorder, showHiddenContentHandler, title }) {
  const [FilterDown, setFilterDown] = useState(false);
  const toggleFilterClickHandler = () => {
    setFilterDown((prevState) => !prevState);
    showHiddenContentHandler();
  };

  return (
    <StyledFilterVisibleContent
      onClick={toggleFilterClickHandler}
      showBorder={showBorder}
    >
      {title}
      <Icon
        iconName={FilterDown ? 'HiChevronDown' : 'HiChevronRight'}
        color="black"
      />
    </StyledFilterVisibleContent>
  );
}

FilterDropDown.propTypes = {
  showBorder: PropTypes.bool,
  showHiddenContentHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
FilterDropDown.defaultProps = {
  showBorder: false,
};

export default FilterDropDown;
