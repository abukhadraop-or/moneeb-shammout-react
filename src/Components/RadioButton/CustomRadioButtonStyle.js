import { styled, css } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const checkedCSS = css`
  border: solid 0.3rem;
  border-color: ${constants.Light_Blue};
  height: 0.6rem;
  width: 0.6rem;
`;
const unCheckedCSS = css`
  border: solid 0.1rem;
  height: 1rem;
  width: 1rem;
`;
const StyledCustomRadioButton = styled.span`
  display: flex;
  background-color: white;
  border-radius: 100%;
  ${(props) =>
    props.checked ? checkedCSS : unCheckedCSS}/* @media (min-width: 25rem) {
    width: 100%;
    height: auto;
  } */
`;

export default StyledCustomRadioButton;
