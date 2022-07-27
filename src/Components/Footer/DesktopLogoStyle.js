import { styled } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const StyledDesktopLogo = styled.div`
  display: none;
  background-color: ${constants.Dark_Blue};
  @media (min-width: 50rem) {
    display: flex;
  }
`;
export default StyledDesktopLogo;
