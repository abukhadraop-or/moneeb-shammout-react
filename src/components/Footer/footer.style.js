import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';

const LeftSide = styled.div`
  ${media.desktop`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    // needed minus margin to left only this div
    margin-top:-5rem;
    width: 12rem;

 `}
`;

const Logo = styled.div`
  background-color: ${colors.darkBlue};
  display: none;

  ${media.desktop`
    display: flex;
 `}
`;

const StyledFooter = styled.footer`
  background-color: ${colors.darkBlue};
  display: flex;
  flex-direction: column;
  height: auto;
  padding-left: 1rem;
  width: 100%;

  .joinCommunity {
    align-items: center;
    background-color: white;
    border-radius: 0.2rem;
    height: 2.8rem;
    justify-content: center;
    margin: 2rem 0 3rem 0;
    width: 14rem;

    ${media.desktop`
      color: ${colors.lightBlue};
      margin-left:-4rem;
      margin-top:.2rem;

    `}
  }

  .footerTitles {
    width: 9rem;
    height: 2.5rem;
  }

  .footerDrops {
    padding-left: 0.5rem;
    padding-bottom: 0rem;
  }

  ${media.desktop`
    flex-direction: row;
    justify-content: center;
    padding:5rem 0rem 3.5rem 6rem;  
  
  `}
`;

export { StyledFooter, Logo, LeftSide };
