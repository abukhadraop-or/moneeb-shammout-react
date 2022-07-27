import { styled } from 'reuse/Packages';

const StyledDesktopMoviesContainer = styled.div`
  @media (min-width: 50rem) {
    display: flex;
    width: 70%;
    flex-direction: row;
    box-sizing: border-box;
    height: auto;
    flex-wrap: wrap;
  }
`;
export default StyledDesktopMoviesContainer;
