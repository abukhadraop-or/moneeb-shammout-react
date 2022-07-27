import { styled } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const StyledInfoPopUp = styled.div`
  width: 20rem;
  height: 2rem;
  font-size: 1rem;
  display: flex;
  box-sizing: border-box;
  background-color: ${constants.Dark_Blue};
  color: ${constants.White};
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  /* @media (min-width: 25rem) {
    width: 100%;
    height: auto;
  } */
`;

export default StyledInfoPopUp;
