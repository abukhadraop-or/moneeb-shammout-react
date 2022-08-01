import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Icon from 'Components/Icon/Icon';
import TextField from 'Components/TextField/TextField';

import StyledSearchBox from './SearchBox.Style';

/**
 *  Create TextField component depending on the theme chosen.
 * @param {object} props Component variables.
 * @param {String} leftIcon   Icon name to be placed at left.
 * @param {string} placeHolder PlaceHolder.
 * @param {String} rightIcon  Icon name to be placed at right.
 * @return {JSX}  TextField component.
 */

function SearchBox({ leftIcon, placeHolder, rightIcon }) {
  const searchFieldController = useRef('');

  /**
   *  Empty search text field.
   */

  const onClickRightIconHandler = () => {
    searchFieldController.current.value = '';
  };

  return (
    <StyledSearchBox>
      <>
        <Icon iconName={leftIcon} color="black" />
        <TextField placeHolder={placeHolder} ref={searchFieldController} />
        <Icon
          iconName={rightIcon}
          onClick={onClickRightIconHandler}
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
