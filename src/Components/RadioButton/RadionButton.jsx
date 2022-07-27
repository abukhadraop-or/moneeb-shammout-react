import { React, PropTypes } from 'reuse/Packages';
import StyledCustomRadioButton from './CustomRadioButtonStyle';
// import StyledRadioButton from './DefaultRadionButtonStyle';
import StyledLabel from './LabelStyle';

/**
 * @description renders a custom radio button
 * @param {string} title   label for radio button
 * @param {string} id   unique identifier
 * @param {boolean} checked   check state for radio btn
 * @param {Function} onChangeHandler handle  radio btn click change
 * @returns {JSX}  RadioButton component
 */
function RadioButton({ label, onChangeHandler, checked, id }) {
  return (
    <StyledLabel
      htmlFor="radio"
      onClick={() => onChangeHandler(id)}
      checked={checked}
      id={id}
    >
      <StyledCustomRadioButton className="checkmark" checked={checked} />
      {label}
      <br />
    </StyledLabel>
  );
}
RadioButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};
export default RadioButton;
