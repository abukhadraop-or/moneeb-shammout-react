import { styled } from 'reuse/Packages';
// import * as constants from 'reuse/Constants';

const StyledPosterContainer = styled.div`
  @media (min-width: 25rem) {
    display: flex;
    height: 9rem;
    min-height: 9rem;
    width: 10rem;
    min-width: 6rem;
  }
  @media (min-width: 50rem) {
    height: 16rem;
    min-height: 16rem;
    width: 11rem;
    min-width: 11rem;
    position: relative;
  }
`;
export default StyledPosterContainer;
