import { styled } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const StyledTrendingDiv = styled.div`
  @media (min-width: 25rem) {
    font-size: 1.5rem;
    font-weight: 700;
    padding-top: 1rem;
    padding-left: 1rem;
    line-height: 1rem;
    font-style: bold;
    box-sizing: border-box;
    width: 100%;
    height: 3.2rem;
    display: flex;
    background-color: ${constants.white_Grey};
    color: ${constants.Black};
  }
`;
export default StyledTrendingDiv;
