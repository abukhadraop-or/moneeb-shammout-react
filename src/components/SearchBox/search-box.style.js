import styled from 'styled-components';
import { media } from 'styles/media-query';

// TODO:css fix
const StyledSearchBox = styled.div`
  font-size: 1rem;
  width: 100%;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: grey;

  ${media.desktop`
  width:95%;
  padding-left:0.5rem;
  `}
`;
export default StyledSearchBox;
