import { styled } from 'reuse/Packages';

const StyledRightWrapper = styled.span`
  @media (min-width: 25rem) {
    display: flexbox;
    flex-direction: row;
    :last-child {
      padding-right: 1.5rem;
    }
  }
  @media (min-width: 50rem) {
    :last-child {
      padding-right: 0;
    }
    width: 20rem;
    justify-content: space-between;
  }
`;

export default StyledRightWrapper;
