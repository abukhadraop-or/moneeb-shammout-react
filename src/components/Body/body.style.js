import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';

const StyledBody = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: auto;
  padding-left: 1.3rem;
  padding-top: 1.2rem;
  width: 100%;

  .searchButton {
    align-items: center;
    background-color: ${colors.lightBlue};
    border: solid 1rem;
    border-color: transparent;
    border-radius: 3rem;
    cursor: pointer;
    height: 2.8rem;
    justify-content: center;
    margin: 1rem 0rem 3rem 0rem;
    width: 95%;
  }

  .loadMore {
    align-items: center;
    background-color: ${colors.lightBlue};
    border: solid 1rem;
    border-color: transparent;
    border-radius: 0.5rem;
    cursor: pointer;
    height: 3.2rem;
    justify-content: center;
    margin: 2rem 0rem 1.5rem 0rem;
    width: 100%;

    ${media.desktop`
      margin: 1rem 0rem 2rem 2.5rem;
      width:85%;

      &:hover{
        color:black;
     }
  `}
  }

  ${media.desktop`
    align-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left:6rem;
    white-space: normal;

  `};
`;

const FiltersContainer = styled.div`
  .popularHeader {
    padding-bottom: 1.5rem;
  }

  ${media.desktop`
    padding-left: 10rem;
    padding-top: 1rem;
    position:relative;
    width: 18rem;
  `}
`;

const MoviesContainer = styled.div`
  padding-right: 1.3rem;

  ${media.desktop`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex:0.95;
    height: auto;
    padding-right: 0;
    padding-top: 3.5rem;  
    position:relative;
  `}
`;

export { StyledBody, MoviesContainer, FiltersContainer };
