import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Title from 'Components/Title/Title';

import { StyledSelectMenu, Option, OptionContainer } from './SelectMenuStyle';

/**
 *  Create SelectMenu component.
 * @param {object} props Component variables.
 * @param {Array} props.optionsList List of option to be displayed
 * @param {function} props.selectMenuChangeHandler Reflects changes on the parent components.
 * @return {JSX}  SelectMenu component.
 */

function SelectMenu({ optionsList, selectMenuChangeHandler }) {
  const [selectTitle, setSelectTitle] = useState(optionsList[0]);
  const [showMenu, setShowMenu] = useState(false);

  /**
   *   Handles select menu click show or hide.
   */

  const selectMenuOnClickHandler = () => {
    setShowMenu((prevState) => !prevState);
  };

  /**
   *   Handles select menu option click.
   * @param {Object} event  The  Event object.
   * @return  {null}
   */

  const optionClickHandler = (event) => {
    const optionID = event.currentTarget.id;
    if (optionID === selectTitle) return;
    setSelectTitle(optionID);
    selectMenuChangeHandler(optionID, true);
  };

  return (
    <StyledSelectMenu onClick={selectMenuOnClickHandler}>
      <Title title={selectTitle} theme="selectTitle" />
      <OptionContainer>
        {showMenu &&
          optionsList.map((option) => (
            <Option
              key={option}
              onClick={(event) => optionClickHandler(event)}
              id={option}
              selected={selectTitle}
              content={option}
            >
              {option}
            </Option>
          ))}
      </OptionContainer>
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
