import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';
import Button from 'components/Button';

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 0 1.3rem;
  width: 100%;
  position: relative;
  ${media.desktop`
    flex-direction: row;
    gap:2rem;
  `};
`;

export const FiltersContainer = styled.div`
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

const buttonDefaultStyle = ` 
  align-items: center;
  background-color: ${colors.lightBlue};
  border: solid 1rem;
  border-color: transparent;
  cursor: pointer;
  justify-content: center;`;

export const SearchButton = styled(Button)`
  ${buttonDefaultStyle};
  border-radius: 3rem;
  height: 2.8rem;
  margin: 0.5rem 0rem 2rem 0rem;
  width: 100%;
`;

export const MoviesContainer = styled.div`
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

export const LoadMoreButton = styled(Button)`
  ${buttonDefaultStyle};
  border-radius: 0.5rem;
  height: 3.2rem;
  margin: 2rem 0rem 1.5rem 0rem;

  ${media.desktop`
      margin: 1rem 0rem 2rem 0rem;
      width:100%;

      &:hover{
        color:black;
     }
  `}
`;
