import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon/Icon';
import StyledFilterVisibleContent from './filter-visible-content.style';

/**
 * Filter visible component.
 *
 * @param {Object} props Component props.
 * @param {boolean} props.showBorder Shows bottom border.
 * @param {Function} onClick External on click handler.
 * @param {string} title Title text.
 *
 * @return {Element}
 */
function FilterDropDown({ showBorder, onClick, title }) {
  const [arrowDown, setArrowDown] = useState(false);

  /**
   * Toggle filter arrows along with an external handler.
   */
  const filterClickHandler = () => {
    setArrowDown((prevState) => !prevState);
    onClick();
  };

  return (
    <StyledFilterVisibleContent
      onClick={filterClickHandler}
      showBorder={showBorder}
    >
      {title}
      <Icon
        iconName={arrowDown ? 'HiChevronDown' : 'HiChevronRight'}
        color="black"
      />
    </StyledFilterVisibleContent>
  );
}

FilterDropDown.propTypes = {
  onClick: PropTypes.func.isRequired,
  showBorder: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

FilterDropDown.defaultProps = {
  showBorder: false,
};

export default FilterDropDown;
