import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';

const StyledSearchPanel = styled.div`
  display: block;
  z-index: 1;
  font-size: 1rem;
  width: 100%;
  color: grey;
  position: fixed;
  background-color: ${colors.white};
  bottom: 21.6rem;
  padding-bottom: 0;
  margin-bottom: 2.5rem;

  ${media.desktop`
    width: 100%;
    bottom: 31rem;
    justify-content:center;
    justify-items:center;
    align-items:center;
  `}
`;
export default StyledSearchPanel;
