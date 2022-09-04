import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';

const SearchPrediction = styled.div`
  border-top: 0.1rem solid ${colors.flashyWhite};
  color: black;
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  height: 2rem;
  gap: 0.5rem;
  padding-left: 1rem;
  width: 100%;

  ${({ bottomBorder }) =>
    bottomBorder ? `border-bottom: 0.1rem solid ${colors.flashyWhite};` : ''};

  ${media.desktop`
    padding-left:10rem;
 `}
`;

export default SearchPrediction;
