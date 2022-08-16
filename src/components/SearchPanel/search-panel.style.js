import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';

const StyledSearchPanel = styled.div`
  background-color: ${colors.white};
  bottom: 21.6rem;
  color: grey;
  display: block;
  font-size: 1rem;
  margin-bottom: 2.5rem;
  padding-bottom: 0;
  position: fixed;
  width: 100%;
  z-index: 1;

  ${media.desktop`
    align-items:center;
    bottom: 31rem;
    justify-content:center;
    justify-items:center;
    width: 100%;
  `}
`;

export default StyledSearchPanel;
