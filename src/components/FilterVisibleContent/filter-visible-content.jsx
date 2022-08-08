import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon/icon';
import StyledFilterVisibleContent from './filter-visible-content.style';

/**
 * Filter visible component.
 *
 * @param {Object} props   Component props.
 * @param {boolean} props.showBorder   Shows bottom border.
 * @param {Function} showHiddenContentHandler  External on click handler.
 * @param {string} title  Title text.
 *
 * @return {Element}  Filter visible component.
 */
function FilterDropDown({ showBorder, showHiddenContentHandler, title }) {
  const [FilterDown, setFilterDown] = useState(false);

  /**
   * Toggle filter arrows along with an external handler.
   */
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
