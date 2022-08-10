import { React, forwardRef } from 'react';
import PropTypes from 'prop-types';
import StyledTextField from './text-field.style';

/**
 * TextField with a forwarded reference.
 *
 * @param {Object} props Component props.
 * @param {string} props.placeHolder PlaceHolder text.
 * @param {string} props.theme  Theme type for css.
 * @param {Object}  ref Forwarding ref to HOC.
 *
 * @return {Element}
 */
const TextField = forwardRef(({ placeHolder, theme }, ref) => (
  <StyledTextField placeholder={placeHolder} ref={ref} theme={theme} />
));
// TODO ask about the ref
TextField.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default TextField;