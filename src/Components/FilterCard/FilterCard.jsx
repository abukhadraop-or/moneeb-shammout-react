import { React, PropTypes, useState } from 'reuse/Packages';
import FilterVisilbeContent from 'Components/FilterVisilbeContent/FilterVisilbeContent';
import StyledFilterCard from './FilterCard.Style';

/**
 * @description return FilterCard component
 * @param {String} title  title text
 * @param {function} onClick  handel click event
 * @param {ArrauOf(element)} children  children elements jsx
 * @returns {JSX}  FilterDropDown component
 */
function FilterCard({ title, children, onClick }) {
  const [showCard, setShowCard] = useState(false);
  const filterClickHandler = () => {
    setShowCard((prevSate) => !prevSate);
  };
  return (
    <StyledFilterCard onClick={onClick}>
      <FilterVisilbeContent
        title={title}
        showHiddenContentHandler={filterClickHandler}
      />
      {showCard && children}
    </StyledFilterCard>
  );
}
FilterCard.propTypes = {
  // used shape because array of elements gives an error
  // because im using conditional rendreing in the parent component
  children: PropTypes.arrayOf(PropTypes.shape),
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};
FilterCard.defaultProps = {
  children: null,
  onClick: null,
};

export default FilterCard;
