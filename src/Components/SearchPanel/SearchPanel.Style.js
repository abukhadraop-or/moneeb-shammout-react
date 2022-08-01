import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

import colors from 'Styles/Colors';

const StyledSearchPanel = styled.div`
  ${media.phone`
    display: block;
    font-size: 1rem;
    width: 100%;
    color: grey;
    position: fixed;
    background-color: ${colors.white};
    bottom: 42%;
    padding-bottom: 0;
    margin-bottom: 2.5rem;
 `}
  ${media.desktop`
    width: 100%;
    bottom: 51%;
    z-index: 1;
    justify-content:center;
    justify-items:center;
    align-items:center;
  `}
`;
export default StyledSearchPanel;
