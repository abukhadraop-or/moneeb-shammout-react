import { React, PropTypes, useState } from 'reuse/Packages';

import StyledCheckBox from './CheckBoxStyle';
import StyledLabel from './LabelStyle';

/**
 * @description return checkBox component
 * @param {string } label   label text
 * @param {function } onCheckHandler   handel check event
 * @param {boolean } itemVisibility   visibility state
 * @param {boolean } checked   intial checkbox state
 * @returns {JSX}  checkBox
 */
function CheckBox({ label, onCheckHandler, itemVisibility, checked }) {
  const [checkState, setCheckState] = useState(checked);
  const toggleCheckBox = () => {
    setCheckState((prevState) => !prevState);
    if (onCheckHandler) onCheckHandler();
  };
  return (
    itemVisibility && (
      <StyledLabel
        htmlFor={label}
        onClick={toggleCheckBox}
        checked={checkState}
      >
        <StyledCheckBox name={label} checked={checkState} />
        {label}
      </StyledLabel>
    )
  );
}
CheckBox.propTypes = {
  checked: PropTypes.bool,
  itemVisibility: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onCheckHandler: PropTypes.func,
};
CheckBox.defaultProps = {
  checked: true,
  onCheckHandler: null,
};

export default CheckBox;
