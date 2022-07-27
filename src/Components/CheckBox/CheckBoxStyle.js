import { styled, css } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const checkedCSS = css`
  background-color: ${constants.Light_Blue};
  ::after {
    display: block;
    justify-content: center;
    left: 0.3rem;
    top: 0.1rem;
    width: 0.3rem;
    height: 0.6rem;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
const unCheckedCSS = css`
  background-color: ${constants.White};
  border: solid 0.01rem;
  border-radius: 30%;
  border-color: ${constants.Light_Blue};
`;
const StyledCheckBox = styled.span`
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  top: 0;
  left: 5%;
  background-color: #eee;
  ::after {
    content: '';
    position: absolute;
    display: none;
  }
  ${(props) =>
    props.checked ? checkedCSS : unCheckedCSS}/* @media (min-width: 25rem) {
    width: 100%;
    height: auto;
  } */
`;

export default StyledCheckBox;
