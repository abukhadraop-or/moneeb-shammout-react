import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';

const DesktopLeftSide = styled.div`
  ${media.desktop`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 12rem;
    margin-top:-5rem;

 `}
`;

const DesktopLogo = styled.div`
  display: none;
  background-color: ${colors.darkBlue};

  ${media.desktop`
    display: flex;
 `}
`;

const StyledFooter = styled.footer`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 0 auto -9.6rem;
  min-height: 100%;
  padding-left: 1rem;
  width: 100%;
  background-color: ${colors.darkBlue};

  ${media.desktop`
    flex-direction: row;
    justify-content: center;
    padding:5rem 0rem 3.5rem 6rem;  
  
  `}
`;

export { StyledFooter, DesktopLogo, DesktopLeftSide };
