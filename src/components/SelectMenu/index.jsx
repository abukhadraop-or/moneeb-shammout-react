import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledSelectMenu,
  Option,
  OptionContainer,
  MenuTitle,
} from './select-menu.style';

/**
 * Select menu component.
 *
 * @param {Object} props Component props.
 * @param {Function} props.onChange Reflects changes on the parent components.
 * @param {Array<string>} props.options List of options to be displayed.
 *
 * @return {Element}
 */
function SelectMenu({ onChange, options }) {
  const [selectTitle, setSelectTitle] = useState(options[0]);
  const [showMenu, setShowMenu] = useState(false);

  /**
   * Handles select menu click show or hide.
   */
  const selectClickHandler = () => {
    setShowMenu((prevState) => !prevState);
  };

  /**
   * Handles select menu option click.
   *
   * @param {Object} event The Event object.
   */
  const optionClickHandler = (event) => {
    const optionId = event.currentTarget.id;

    if (optionId === selectTitle) {
      return;
    }

    if (onChange) {
      onChange(optionId);
    }

    setSelectTitle(optionId);
  };

  return (
    <StyledSelectMenu onClick={selectClickHandler}>
      <MenuTitle title={selectTitle} fontWeight="medium" fontSize="medium" />
      <OptionContainer>
        {showMenu &&
          options.map((option) => (
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
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

SelectMenu.defaultProps = {
  onChange: null,
};

export default SelectMenu;
