import styled from 'styled-components';
import { media } from 'styles/media-query';

const SearchPrediction = styled.div`
  border-top: 0.1rem solid rgb(227, 227, 227);
  box-sizing: border-box;
  color: black;
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  height: 2rem;
  padding-left: 1rem;
  width: 100%;

  ${(props) =>
    props.bottomBorder
      ? { 'border-bottom': `0.1rem solid rgb(227,227,227)` }
      : ''};

  ${media.desktop`
    padding-left:10rem;
 `}
`;

export default SearchPrediction;
