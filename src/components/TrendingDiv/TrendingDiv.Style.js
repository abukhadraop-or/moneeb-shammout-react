import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

import colors from 'Styles/Colors';

const StyledTrendingDiv = styled.div`
  ${media.phone`
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
    background-color: ${colors.whiteGrey};
    color: ${colors.black};
  `}
  ${media.desktop`
  padding-left:10rem;
  `}
`;
export default StyledTrendingDiv;
