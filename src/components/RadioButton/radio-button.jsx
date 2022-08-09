import React from 'react';
import PropTypes from 'prop-types';
import { StyledRadioButton, Label } from './radio-button.style';

/**
 * Radio button component.
 *
 * @param {Object} props Component props.
 * @param {boolean} props.checked   Check state for radio button.
 * @param {string} props.id   Unique identifier.
 * @param {string} props.label   Label for radio button.
 * @param {Function} props.onChange Handle  radio button click change.
 *
 * @return {Element}
 */
function RadioButton({ checked, id, label, onChange }) {
  return (
    <Label
      htmlFor="radio"
      onClick={() => onChange(id)}
      checked={checked}
      id={id}
    >
      <StyledRadioButton checked={checked} />
      {label}
      <br />
    </Label>
  );
}

RadioButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioButton;
