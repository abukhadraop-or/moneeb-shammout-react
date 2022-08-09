import { React, forwardRef } from 'react';
import PropTypes from 'prop-types';
import StyledTextField from './text-field.style';

/**
 * TextField with a forwarded reference.
 *
 * @param {Object} props Component props.
 * @param {Object}  forwardedRef Forwarding ref to HOC.
 * @param {string} props.placeHolder PlaceHolder text.
 * @param {string} props.theme  Theme type for css.
 *
 * @return {Element}  TextField component.
 */
const TextField = forwardRef(({ placeHolder, theme }, forwardedRef) => (
  <StyledTextField placeholder={placeHolder} ref={forwardedRef} theme={theme} />
));

TextField.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default TextField;
