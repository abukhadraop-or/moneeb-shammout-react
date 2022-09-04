import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import { StyledStringDropDown, NavButton } from './string-drop-down.style';

/**
 * String drop down component depending on the theme chosen.
 *
 * @param {Object} props Component props.
 * @param {Array<string>} props.content  Items to be displayed inside.
 * @param {string} props.dropType  Desktop themes.
 * @param {string} props.className Class name for css.
 * @param {{color:string,fontSize:string,fontWeight:string}} props.theme Theme object of button attributes.
 * @param {boolean} props.visibility   Show or hide menu.
 *
 * @return {Element}
 */
function StringDropDown({
  content,
  dropType,
  theme: { color, fontSize, fontWeight },
  visibility,
  className,
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
        className={className}
      >
        {content.map((sentence) =>
          dropType === 'navDrops' ? (
            <NavButton
              key={sentence}
              text={sentence}
              color={color}
              fontSize={fontSize}
              fontWeight={fontWeight}
            />
          ) : (
            <Button
              key={sentence}
              text={sentence}
              color={color}
              fontSize={fontSize}
              fontWeight={fontWeight}
            />
          )
        )}
      </StyledStringDropDown>
    )
  );
}

StringDropDown.propTypes = {
  className: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  dropType: PropTypes.string,
  theme: PropTypes.objectOf(PropTypes.string),
  visibility: PropTypes.bool.isRequired,
};

StringDropDown.defaultProps = {
  className: null,
  dropType: '',
  theme: {},
};

export default StringDropDown;
