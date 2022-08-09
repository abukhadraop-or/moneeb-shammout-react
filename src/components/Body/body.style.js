import styled from 'styled-components';
import { media } from 'styles/media-query';

const DesktopFiltersContainer = styled.div`
  ${media.desktop`
    padding-left: 10rem;
    padding-top: 1rem;
    position:relative;
    width: 18rem;
  `}
`;

const DesktopMoviesContainer = styled.div`
  padding-right: 1.3rem;

  ${media.desktop`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex:0.95;
    height: auto;
    margin-left:-1rem;
    padding-right: 0;
    padding-top: 3.5rem;  
    position:relative;
  `}
`;

const StyledBody = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: auto;
  padding-left: 1.3rem;
  padding-top: 1.2rem;
  width: 100%;

  ${media.desktop`
    align-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left:6rem;
  `};
`;

export { StyledBody, DesktopMoviesContainer, DesktopFiltersContainer };
