import { React, useState } from 'react';
import PropTypes from 'prop-types';

import { StyledCheckBox, Label } from './CheckBox.Style';

/**
 *  Create checkBox component.
 * @param {object} props   Component variables.
 * @param {boolean } props.checked   Initial checkbox state.
 * @param {boolean } props.itemVisibility   Visibility state.
 * @param {function } props.onCheck   Handel check event.
 * @param {string } props.label   Label text.
 * @return {JSX}  CheckBox component.
 */

function CheckBox({ checked, itemVisibility, label, onCheck }) {
  const [checkState, setCheckState] = useState(checked);
  const toggleCheckBox = () => {
    setCheckState((prevState) => !prevState);
    if (onCheck) onCheck();
  };
  return (
    itemVisibility && (
      <Label htmlFor={label} onClick={toggleCheckBox} checked={checkState}>
        <StyledCheckBox name={label} checked={checkState} />
        {label}
      </Label>
    )
  );
}
CheckBox.propTypes = {
  checked: PropTypes.bool,
  itemVisibility: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onCheck: PropTypes.func,
};
CheckBox.defaultProps = {
  checked: true,
  onCheck: null,
};

export default CheckBox;
