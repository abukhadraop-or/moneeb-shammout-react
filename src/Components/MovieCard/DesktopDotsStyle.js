import { styled } from 'reuse/Packages';
// import * as constants from 'reuse/Constants';

const StyledDesktopDots = styled.div`
  @media (min-width: 25rem) {
    display: none;
  }
  @media (min-width: 50rem) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 2rem;
  }
`;
export default StyledDesktopDots;
