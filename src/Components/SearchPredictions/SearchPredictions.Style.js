import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const SearchPrediction = styled.div`
  ${media.phone`
    display: flex;
    font-size: 1rem;
    width: 100%;
    height: 2rem;
    padding-left: 1rem;
    box-sizing: border-box;
    color: black;
    font-weight: 400;
    border-top: 0.1rem solid rgb(227,227,227);
    ${(props) =>
      props.bottomBorder
        ? { 'border-bottom': `0.1rem solid rgb(227,227,227)` }
        : ''};
  `}
  ${media.desktop`
  padding-left:10rem;
 `}
`;
export default SearchPrediction;
