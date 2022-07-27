import { React, PropTypes, useState } from 'reuse/Packages';
import Title from 'Components/Title/Title';
import StyledSelectMenu from './SelectMenuStyle';
import StyledOption from './Option.Style';
import StyledOptionContainer from './Option.Container.Style';
/**
 * @description return SelectMenu component
 * @param {Array} optionsList list of option to be displayed
 * @param {function}selectMenuChangeHandler reflects changes on the parent components
 * @returns {JSX}  SelectMenu component
 */
function SelectMenu({ optionsList, selectMenuChangeHandler }) {
  const [selectTitle, setSelectTitle] = useState(optionsList[0]);
  const [showMenu, setShowMenu] = useState(false);
  /**
   * @description  handels select menu click show or hide
   * @returns  {null}
   */
  const selectMenuOnClickHandler = () => {
    setShowMenu((prevState) => !prevState);
  };
  /**
   * @description  handels select menu option click
   * @param {Object} e  the event object
   * @returns  {null}
   */
  const optionClickHandler = (e) => {
    const optionID = e.currentTarget.id;
    setSelectTitle(optionID);
    if (optionID !== optionsList[0]) {
      selectMenuChangeHandler(optionID, true);
    } else {
      selectMenuChangeHandler(optionID, false);
    }
  };
  return (
    <StyledSelectMenu onClick={selectMenuOnClickHandler}>
      <Title title={selectTitle} theme="medium" />
      <StyledOptionContainer>
        {showMenu &&
          optionsList.map((option) => (
            <StyledOption
              key={option}
              onClick={(e) => optionClickHandler(e)}
              id={option}
              selected={selectTitle}
              content={option}
            >
              {option}
            </StyledOption>
          ))}
      </StyledOptionContainer>
    </StyledSelectMenu>
  );
}
SelectMenu.propTypes = {
  optionsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectMenuChangeHandler: PropTypes.func,
};
SelectMenu.defaultProps = {
  selectMenuChangeHandler: null,
};

export default SelectMenu;
