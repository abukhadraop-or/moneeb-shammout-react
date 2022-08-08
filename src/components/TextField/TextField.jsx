import { React, forwardRef } from 'react';
import PropTypes from 'prop-types';

import StyledTextField from './TextField.Style';

/**
 * Creates a textfield jsx with a forwarded reference.
 * @param {Object} props Component props.
 * @param {Object}  forwardedRef Forwarding ref to HOC.
 * @param {string} props.placeHolder PlaceHolder text.
 * @param {string} props.theme PlaceHolder text.
 * @return {Element}  TextField component.
 */

const TextField = forwardRef(({ placeHolder, theme }, forwardedRef) => (
  <StyledTextField placeholder={placeHolder} ref={forwardedRef} theme={theme} />
));

TextField.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types, react/no-unused-prop-types
  forwardedRef: PropTypes.object.isRequired,
  placeHolder: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default TextField;
