import { styled } from 'reuse/Packages';

const StyledDesktopFiltersContainer = styled.div`
  @media (min-width: 50rem) {
    display: flex;
    flex-direction: column;
    padding-left: 10rem;
    width: 20%;
    padding-top: 1rem;
  }
`;

export default StyledDesktopFiltersContainer;
