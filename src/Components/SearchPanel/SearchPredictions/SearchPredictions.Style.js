import { styled, css } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const bottomBorderCSS = css`
  border-bottom: 0.1rem solid ${constants.Grey};
`;
const SearchPrediction = styled.div`
  @media (min-width: 25rem) {
    display: flex;
    font-size: 1rem;
    width: 100%;
    height: 2rem;
    padding-left: 1rem;
    box-sizing: border-box;
    color: black;
    font-weight: 400;
    border-top: 0.1rem solid ${constants.Grey};
    ${(props) => (props.bottomBorder ? bottomBorderCSS : '')};
  }
  @media (min-width: 50rem) {
  }
`;
export default SearchPrediction;
