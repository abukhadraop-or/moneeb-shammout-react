import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';

// TODO:fix css
const StyledSearchPanel = styled.div`
  display: block;
  z-index: 1;
  font-size: 1rem;
  width: 100%;
  color: grey;
  position: fixed;
  background-color: ${colors.white};
  bottom: 42%;
  padding-bottom: 0;
  margin-bottom: 2.5rem;

  ${media.desktop`
    width: 100%;
    bottom: 51%;
    justify-content:center;
    justify-items:center;
    align-items:center;
  `}
`;
export default StyledSearchPanel;
