import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 0 1.3rem;
  width: 100%;

  ${media.desktop`
    flex-direction: row;
    gap:2rem;
  `};

  .searchButton {
    align-items: center;
    background-color: ${colors.lightBlue};
    border: solid 1rem;
    border-color: transparent;
    border-radius: 3rem;
    cursor: pointer;
    height: 2.8rem;
    justify-content: center;
    margin: 0.5rem 0rem 2rem 0rem;
    width: 100%;
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

    ${media.desktop`
      margin: 1rem 0rem 2rem 0rem;
      width:100%;

      &:hover{
        color:black;
     }
  `}
  }
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  ${media.desktop`
    padding-top: 1rem;
    position:relative;
    margin-left:15rem;
    width: 18rem;
  `}
`;

const MoviesContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;

  ${media.desktop`
    flex:1;
    flex-wrap: wrap;
    flex-direction: row;
    margin-right:13rem;
    margin-top: 6.2rem;
  `}
`;

export { StyledBody, MoviesContainer, FiltersContainer };
