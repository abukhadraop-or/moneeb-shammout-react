import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import TextField from 'components/TextField';
import { StyledSearchBox, TextBoxWrapper } from './search-box.style';

/**
 * TextField component depending on the theme chosen.
 *
 * @param {Object} props Component props.
 * @param {string} props.leftIcon Icon name to be placed at left.
 * @param {function} props.onChange Text field change handler.
 * @param {string} props.placeHolder PlaceHolder text.
 * @param {string} props.rightIcon Icon name to be placed at right.
 *
 * @return {Element} TextField component.
 */
function SearchBox({ leftIcon, onChange, placeHolder, rightIcon }) {
  const searchFieldController = useRef('');

  /**
   * Empty search text field.
   */
  const rightIconClickHandler = () => {
    searchFieldController.current.value = '';
  };

  return (
    <StyledSearchBox>
      <>
        <Icon iconName={leftIcon} color="black" />
        <TextBoxWrapper>
          <TextField
            placeHolder={placeHolder}
            ref={searchFieldController}
            theme="search"
            onChange={onChange}
          />
        </TextBoxWrapper>
        <Icon
          iconName={rightIcon}
          onClick={rightIconClickHandler}
          color="lightGrey"
        />
      </>
    </StyledSearchBox>
  );
}

SearchBox.propTypes = {
  leftIcon: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeHolder: PropTypes.string.isRequired,
  rightIcon: PropTypes.string.isRequired,
};

SearchBox.defaultProps = {
  onChange: null,
};

export default SearchBox;
