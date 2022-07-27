import { styled } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const StyledFooter = styled.footer`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: 1rem;

  background-color: ${constants.Dark_Blue};
  @media (min-width: 50rem) {
    flex-direction: row;
    justify-content: center;
    padding-top: 6rem;
  }
`;

export default StyledFooter;
