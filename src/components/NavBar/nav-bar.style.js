import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';
// TODO fix css
const Header = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${colors.darkBlue};
  height: 4rem;
  width: 100%;
`;
const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  :first-child {
    padding-left: 1.5rem;
  }
  overflow: hidden;

  ${media.desktop`
    display: none;
  `}
`;
const RightIconsWrapper = styled.span`
  display: flex;
  flex-direction: row;
  :last-child {
    padding-right: 1.5rem;
  }

  ${media.desktop`
    :last-child {
      padding-right: 0;
    }
    &:nth-child(2){
      padding-top:0.5rem;
    }
    width: 20rem;
    justify-content: space-between;
 `}
`;

const DesktopNavBar = styled.nav`
  display: none;

  ${media.desktop`
    display: flex;
    flex-direction: row;
    height: 4rem;
    position: relative;
    align-items: center;
    .plus{
      font-size:1rem;
      margin-top:0.4rem;
    }
    .search{
      font-size:1.8rem;
    }

    justify-content: space-evenly;
    
  `}
`;
const DesktopLeftWrapper = styled.span`
  display: flex;
  flex-direction: row;
  width: 30rem;
  justify-content: space-between;
  padding-right: 20rem;
  margin-top: 1rem;
`;

export {
  Header,
  StyledNavBar,
  RightIconsWrapper,
  DesktopNavBar,
  DesktopLeftWrapper,
};
