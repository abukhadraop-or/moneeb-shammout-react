import { React, forwardRef, PropTypes } from 'reuse/Packages';
import StyledTextField from './TextField.Style';
/**
 * @description   creates a textfield jsx with a forworded reference
 * @param {string} placeHolder placeHolder
 * @param {node}  forwordRef forwording ref to HOC
 * @returns {JSX}  TextField component
 */
const TextField = forwardRef((props, forwordedRef) => (
  <StyledTextField placeholder={props.placeHolder} ref={forwordedRef} />
));
TextField.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  forwordedRef: PropTypes.object.isRequired,
  placeHolder: PropTypes.string.isRequired,
};

export default TextField;
