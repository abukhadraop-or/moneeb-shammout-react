import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import StyledStringDropDown from './string-drop-down.style';

/**
 * String drop down component depending on the theme chosen.
 *
 * @param {Object} props Component props.
 * @param {Array<string>} props.content  Items to be displayed inside.
 * @param {string} props.dropType  Desktop themes.
 * @param {{color:string,className:string,fontSize:string,fontWeight:string}} props.theme  Theme object of button attributes.
 * @param {boolean} props.visibility   Show or hide menu.
 *
 * @return {Element}
 */
function StringDropDown({
  content,
  dropType,
  theme: { color, className, fontSize, fontWeight },
  visibility,
}) {
  const [visible, setVisible] = useState(false);

  /**
   * Hides menu when mouse out.
   */
  const onBlurHandler = () => {
    setVisible(false);
  };

  /**
   * Shows menu when mouse over.
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
          <Button
            key={sentence}
            text={sentence}
            color={color}
            fontSize={fontSize}
            className={className}
            fontWeight={fontWeight}
          />
        ))}
      </StyledStringDropDown>
    )
  );
}

StringDropDown.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  dropType: PropTypes.string,
  theme: PropTypes.objectOf(PropTypes.string),
  visibility: PropTypes.bool.isRequired,
};

StringDropDown.defaultProps = {
  dropType: '',
  theme: {},
};

export default StringDropDown;
