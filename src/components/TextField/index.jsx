import { React, forwardRef } from 'react';
import PropTypes from 'prop-types';
import StyledTextField from './text-field.style';

/**
 * TextField with a forwarded reference.
 *
 * @param {Object} props Component props.
 * @param {function} props.onChange Text field change handler.
 * @param {string} props.placeHolder PlaceHolder text.
 * @param {string} props.theme Theme type for css.
 * @param {Object}  ref Forwarding ref to HOC.
 *
 * @type {React.ForwardRefRenderFunction<HTMLInputElement, textFieldRefPropTypes>}
 *
 * @return {Element}
 */
const TextField = forwardRef(({ onChange, placeHolder, theme }, ref) => {
  /**
   * Passes the new text to the onChange from HOC.
   */
  const onTextChange = () => {
    onChange(ref.current.value);
  };

  return (
    <StyledTextField
      placeholder={placeHolder}
      ref={ref}
      theme={theme}
      onChange={onTextChange}
      autoFocus
    />
  );
});

// eslint-disable-next-line no-unused-vars
const textFieldRefPropTypes = {
  onChange: PropTypes.func,
  placeHolder: PropTypes.string.isRequired,
  ref: PropTypes.oneOf([PropTypes.shape({ current: null }), PropTypes.func]),
  theme: PropTypes.string.isRequired,
};

TextField.propTypes = {
  onChange: PropTypes.func,
  placeHolder: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

TextField.defaultProps = {
  onChange: null,
};

export default TextField;
