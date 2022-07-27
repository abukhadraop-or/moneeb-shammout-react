// import * as constants from 'reuse/Constants';
import { styled } from 'reuse/Packages';

const StyledDesktopMenu = styled.div`
  display: none;

  @media (min-width: 50rem) {
    display: flex;
  }
`;
export default StyledDesktopMenu;
