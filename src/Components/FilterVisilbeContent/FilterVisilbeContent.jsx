import { React, PropTypes, useState } from 'reuse/Packages';
import Icon from 'Components/Icon/Icon';
import StyledFilterVisilbeContent from './FilterVisilbeContent.Style';

/**
 * @description return Filter visible component
 * @param {String} title  title text
 * @param {function} showHiddenContentHandler  external on click handler
 * @returns {JSX}  Filter visible component
 */
function FilterDropDown({ title, showHiddenContentHandler }) {
  const [FilterDown, setFilterDown] = useState(false);
  const toggleFilterClickHandler = () => {
    setFilterDown((prevState) => !prevState);
    showHiddenContentHandler();
  };
  return (
    <StyledFilterVisilbeContent onClick={toggleFilterClickHandler}>
      {title}
      <Icon
        iconName={FilterDown ? 'HiOutlineChevronDown' : 'HiOutlineChevronRight'}
        color="black"
      />
    </StyledFilterVisilbeContent>
  );
}
FilterDropDown.propTypes = {
  showHiddenContentHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default FilterDropDown;
