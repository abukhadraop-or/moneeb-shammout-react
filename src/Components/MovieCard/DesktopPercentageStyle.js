import { styled } from 'reuse/Packages';
// import * as constants from 'reuse/Constants';

const StyledDesktopPercenatge = styled.div`
  @media (min-width: 25rem) {
    display: none;
  }
  @media (min-width: 50rem) {
    position: absolute;
    display: block;
    bottom: -5%;
    left: 6%;
    width: 2rem;
    color: white;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background-color: black;
    text-align: center;
    font-weight: 700;
    padding: 0.2rem;
  }
`;
export default StyledDesktopPercenatge;
