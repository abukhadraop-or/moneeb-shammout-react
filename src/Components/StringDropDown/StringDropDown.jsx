import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button/Button';

import StyledStringDropDown from './String.Drop.Down.Style';

/**
 *  Create StringDropDown component depending on the theme chosen.
 * @param {object} props Component variables.
 * @param {arrayOf<String>} props.content    Displayed in StringDropDown.
 * @param {String} props.dropType  Desktop themes.
 * @param {String} props.theme  Theme type of buttons.
 * @param {bool} props.visibility   Show or hide menu.
 * @return {JSX}  StringDropDown component.
 */

function StringDropDown({ content, dropType, theme, visibility }) {
  const [visible, setVisible] = useState(false);

  /**
   *  Hides menu when mouse out.
   */

  const onBlurHandler = () => {
    setVisible(false);
  };

  /**
   *  Shows menu when mouse over.
   */

  const onHoverHandler = () => {
    setVisible(true);
  };

  return (
    (visibility || visible) && (
      <StyledStringDropDown
        dropType={dropType}
        onMouseLeave={onBlurHandler}
        onMouseOver={onHoverHandler}
      >
        {content.map((sentence) => (
          <Button key={sentence} text={sentence} theme={theme} />
        ))}
      </StyledStringDropDown>
    )
  );
}

StringDropDown.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  dropType: PropTypes.string,
  theme: PropTypes.string,
  visibility: PropTypes.bool.isRequired,
};

StringDropDown.defaultProps = {
  dropType: '',
  theme: 'smallWhite',
};

export default StringDropDown;
