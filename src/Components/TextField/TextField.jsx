import { React, forwardRef } from 'react';
import PropTypes from 'prop-types';

import StyledTextField from './TextField.Style';

/**
 * Creates a textfield jsx with a forwarded reference.
 * @param {object} props Component variables.
 * @param {object}  forwardedRef Forwarding ref to HOC.
 * @param {string} props.placeHolder PlaceHolder text.
 * @return {JSX}  TextField component.
 */

const TextField = forwardRef((props, forwardedRef) => (
  <StyledTextField placeholder={props.placeHolder} ref={forwardedRef} />
));

TextField.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types, react/no-unused-prop-types
  forwardedRef: PropTypes.object.isRequired,
  placeHolder: PropTypes.string.isRequired,
};

export default TextField;
