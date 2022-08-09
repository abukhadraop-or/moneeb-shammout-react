import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/button';
import StyledStringDropDown from './string-drop-down.style';

/**
 * StringDropDown component depending on the theme chosen.
 *
 * @param {Object} props Component props.
 * @param {Array<string>} props.content    Items to be displayed inside.
 * @param {string} props.dropType  Desktop themes.
 * @param {string} props.theme  Theme type of buttons.
 * @param {boolean} props.visibility   Show or hide menu.
 *
 * @return {Element}
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
