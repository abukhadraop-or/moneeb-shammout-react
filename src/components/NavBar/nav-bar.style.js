import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';

const Header = styled.header`
  background-color: ${colors.darkBlue};
  height: 4rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;

  .utilityButton {
    height: 3rem;
    width: 12rem;
    text-indent: -6rem;
    display: block;
  }
`;

const StyledNavBar = styled.nav`
  align-items: center;
  display: flex;
  height: 4rem;
  justify-content: space-between;
  overflow: hidden;

  .rightRoutes {
    padding-left: 0.5rem;
    padding-bottom: 0.7rem;
  }

  :first-child {
    padding-left: 1.5rem;
  }

  ${media.desktop`
    display: none;
  `}
`;

const RightIconsWrapper = styled.span`
  display: flex;

  :last-child {
    padding-right: 1.5rem;
  }

  ${media.desktop`
     width: 20rem;
     justify-content: space-between;

    :last-child {
      padding-right: 0;
    }

    &:nth-child(2){
      padding-top:0.5rem;
    }
    
 `}
`;

const DesktopNavBar = styled.nav`
  display: none;

  ${media.desktop`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 4rem;
    position: relative;
    justify-content: space-evenly;

  .languageButton {
      border: 0.1rem solid;
      border-color: white;
      border-radius: 0.2rem;
      line-height: 1rem;
      padding-top: 0.25rem;
      height: 1.7rem;

      &:hover {
        color: ${colors.darkBlue};
        background-color: white;
      }
  }
   

    .plus{
      font-size:1rem;
      margin-top:0.4rem;
    }

    .search{
      font-size:1.8rem;
    }

    
  `}
`;

const LeftWrapper = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  margin-right: 18rem;
  width: 30rem;
`;

export { Header, StyledNavBar, RightIconsWrapper, DesktopNavBar, LeftWrapper };
