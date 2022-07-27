import { styled, css } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const selectedCSS = css`
  color: ${constants.Black};
  font-weight: 700;
  background-color: ${constants.white_Grey};
  &:hover,
  :focus {
    background-color: ${constants.Light_Blue};
    color: ${constants.White};
  }
`;
const StyledOption = styled.div`
  min-width: 100%;
  height: auto;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;

  box-sizing: border-box;
  border: none;
  background-color: ${constants.White};
  //assigning hover effect for the focused option
  ${(props) =>
    props.selected === props.content
      ? selectedCSS
      : null}/* @media (min-width: 25rem) {
    width: 100%;
    height: auto;
  } */
`;

export default StyledOption;
