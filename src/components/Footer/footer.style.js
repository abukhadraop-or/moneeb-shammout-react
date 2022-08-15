import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';

const LeftSide = styled.div`
  ${media.desktop`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 12rem;
    //TODO:minus margin
    margin-top:-5rem;

 `}
`;

const Logo = styled.div`
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

  .joinCommunity {
    width: 14rem;
    height: 2.8rem;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 3rem 0;
    border-radius: 0.2rem;
    background-color: white;
    ${media.desktop`
    margin-left:-4rem;
    margin-top:.2rem;
  color: ${colors.lightBlue};

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
