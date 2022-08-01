import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FilterVisibleContent from 'Components/FilterVisibleContent/FilterVisibleContent';
// eslint-disable-next-line no-unused-vars
import StyledFilterCard from './FilterCard.Style';

/**
 *  Create FilterCard component.
 * @param {object} props   Component variables.
 * @param {array<element>} props.children  Children elements JSX.
 * @param {function} props.onClick  Handel click event.
 * @param {String} props.title  Title text.
 * @return {JSX}  FilterCard component.
 */

function FilterCard({ children, onClick, title }) {
  const [showCard, setShowCard] = useState(false);
  const filterClickHandler = () => {
    setShowCard((prevSate) => !prevSate);
  };
  return (
    <StyledFilterCard onClick={onClick}>
      <FilterVisibleContent
        title={title}
        showHiddenContentHandler={filterClickHandler}
        showBorder={showCard}
      />
      {showCard && children}
    </StyledFilterCard>
  );
}

FilterCard.propTypes = {
  // couldn't use element alone or array of element since
  // I have a boolean expression in children array

  children: PropTypes.arrayOf(PropTypes.shape),
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

FilterCard.defaultProps = {
  children: null,
  onClick: null,
};

export default FilterCard;
