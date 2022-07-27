import { styled } from 'reuse/Packages';

const StyledSearchBox = styled.div`
  @media (min-width: 25rem) {
    font-size: 1rem;
    width: 100%;
    height: 2.75rem;
    display: flexbox;
    align-items: center;
    justify-content: center;
    color: grey;
  }
  @media (min-width: 50rem) {
    width: 120%;
  }
`;
export default StyledSearchBox;
