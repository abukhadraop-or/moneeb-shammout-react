import React from 'react';
import PropTypes from 'prop-types';

import { StyledRadioButton, Label } from './RadioButton.Style';

/**
 *  renders a custom radio button
 * @param {object} props Component variables.
 * @param {boolean} props.checked   Check state for radio button.
 * @param {string} props.id   Unique identifier.
 * @param {string} props.label   Label for radio button.
 * @param {Function} props.onChangeHandler Handle  radio button click change.
 * @return {JSX}  RadioButton component.
 */

function RadioButton({ checked, id, label, onChangeHandler }) {
  return (
    <Label
      htmlFor="radio"
      onClick={() => onChangeHandler(id)}
      checked={checked}
      id={id}
    >
      <StyledRadioButton className="checkmark" checked={checked} />
      {label}
      <br />
    </Label>
  );
}

RadioButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default RadioButton;
