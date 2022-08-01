import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const StyledDesktopMenu = styled.div`
  display: none;

  ${media.desktop`
    display: flex;
    justify-content:space-evenly;
    margin-right:2rem;
  `}
`;
export default StyledDesktopMenu;
