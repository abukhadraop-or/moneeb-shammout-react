import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';

const StyledTrendingDiv = styled.div`
  background-color: ${colors.whiteGrey};
  color: ${colors.black};
  display: flex;
  font-size: 1.5rem;
  font-style: bold;
  font-weight: 700;
  height: 3.2rem;
  line-height: 1rem;
  padding-left: 1rem;
  padding-top: 1rem;
  width: 100%;

  ${media.desktop`
    padding-left:10rem;
  `}
`;
export default StyledTrendingDiv;
