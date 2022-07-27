import { React, PropTypes, useRef } from 'reuse/Packages';
import Icon from 'Components/Icon/Icon';
import TextField from 'Components/TextField/TextField';
import StyledSearchBox from './SearchBox.Style';
/**
 * @description return TextField component depending on the theme chosed
 * @param {String} leftIcon   Icon name to be placed at left
 * @param {String} rightIcon  Icon name to be placed at right
 * @param {string} placeHolder placeHolder
 * @returns {JSX}  TextField component
 */
function SearchBox({ leftIcon, rightIcon, placeHolder }) {
  const searchFeildController = useRef('');
  /**
   * @description empty search text field
   * @returns {null}
   */
  const onClickRightIconHandler = () => {
    searchFeildController.current.value = '';
  };
  return (
    <StyledSearchBox>
      <>
        <Icon iconName={leftIcon} color="black" />
        <TextField placeHolder={placeHolder} ref={searchFeildController} />
        <Icon
          iconName={rightIcon}
          onClick={onClickRightIconHandler}
          color="grey"
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
