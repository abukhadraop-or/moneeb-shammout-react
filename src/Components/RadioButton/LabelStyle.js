import { styled, css } from 'reuse/Packages';
// import * as constants from 'reuse/Constants';

const checkedCSS = css`
  font-weight: 600;
`;
const unCheckedCSS = css`
  font-weight: 300;
`;
const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  position: relative;
  cursor: pointer;
  font-size: 1.1rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0.5rem;
  ${(props) =>
    props.checked ? checkedCSS : unCheckedCSS}/* @media (min-width: 25rem) {
    width: 100%;
    height: auto;
  } */
`;

export default StyledLabel;
