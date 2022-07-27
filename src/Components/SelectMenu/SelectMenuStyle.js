import { styled } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const StyledSelectMenu = styled.ul`
  display: block;
  @media (min-width: 25rem) {
    width: 90%;
    height: 0.5rem;
    border-radius: 0.3rem;
    border-color: transparent;
    padding-left: 0.2rem;
    padding-bottom: 2rem;
    margin: 0rem 1rem 0 1rem;
    color: ${constants.Black};
    background-color: ${constants.medium_Grey};
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -3 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='10 9 12 12 14 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.1rem center;
  }
  @media (min-width: 50rem) {
    width: 80%;
  }
`;

export default StyledSelectMenu;
