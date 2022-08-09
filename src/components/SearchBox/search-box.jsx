import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon/icon';
import TextField from 'components/TextField/text-field';
import { StyledSearchBox, TextBoxWrapper } from './search-box.style';

/**
 * TextField component depending on the theme chosen.
 *
 * @param {Object} props Component props.
 * @param {string} leftIcon   Icon name to be placed at left.
 * @param {string} placeHolder PlaceHolder text.
 * @param {string} rightIcon  Icon name to be placed at right.
 *
 * @return {Element}  TextField component.
 */
function SearchBox({ leftIcon, placeHolder, rightIcon }) {
  const searchFieldController = useRef('');

  /**
   *  Empty search text field.
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
  placeHolder: PropTypes.string.isRequired,
  rightIcon: PropTypes.string.isRequired,
};

export default SearchBox;
