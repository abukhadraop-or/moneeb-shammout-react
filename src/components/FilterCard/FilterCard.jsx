import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilterVisibleContent from 'components/FilterVisibleContent/FilterVisibleContent';
import StyledFilterCard from './filter-card.style';

/**
 * FilterCard component.
 *
 * @param {Object} props Component props.
 * @param {Array<Element>} props.children Children elements.
 * @param {Function} props.onClick Handel click event.
 * @param {string} props.title Title text.
 *
 * @return {Element}
 */
function FilterCard({ children, onClick, title }) {
  const [expandCard, setExpandCard] = useState(title === 'Sort');

  /**
   * Expand or minimize filter card.
   */
  const filterClickHandler = () => {
    setExpandCard((prevSate) => !prevSate);
  };

  return (
    <StyledFilterCard onClick={onClick}>
      <FilterVisibleContent
        title={title}
        onClick={filterClickHandler}
        showBorder={expandCard}
      />
      {expandCard && children}
    </StyledFilterCard>
  );
}

FilterCard.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape),
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

FilterCard.defaultProps = {
  children: null,
  onClick: null,
};

export default FilterCard;
