import styled from 'styled-components';

import { media } from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const DesktopFiltersContainer = styled.div`
  ${media.desktop`
  flex: 0 1 auto;
  position:relative;
    display: flex;
    flex-direction: column;
    padding-left: 10rem;
    width: 18rem;
    padding-top: 1rem;
    
  `}
`;
const DesktopMoviesContainer = styled.div`
  ${media.desktop`
    display: flex;
    width: 70%;
    position:relative;
    flex-direction: row;
    box-sizing: border-box;
    height: auto;
    flex:1;
    margin-left:-1rem;
    padding-top: 3.5rem;  
      
    flex-wrap: wrap;
  `}
`;
const InfoPopUp = styled.div`
  width: 20rem;
  height: 2rem;
  font-size: 1rem;
  display: flex;
  box-sizing: border-box;
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
`;
const StyledBody = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: 1.3rem;
  padding-top: 1.2rem;
  ${media.desktop`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
 
    padding-left:6rem;
  `};
`;

export {
  StyledBody,
  DesktopMoviesContainer,
  DesktopFiltersContainer,
  InfoPopUp,
};
