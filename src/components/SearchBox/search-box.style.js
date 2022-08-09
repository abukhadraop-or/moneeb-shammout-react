import styled from 'styled-components';
import { media } from 'styles/media-query';

const TextBoxWrapper = styled.div`
  width: 80%;
  height: 80%;
`;

const StyledSearchBox = styled.div`
  align-items: center;
  color: grey;
  display: flex;
  font-size: 1rem;
  height: 2.75rem;
  justify-content: center;
  width: 100%;

  ${media.desktop`
    padding-left:0.5rem;
  `}
`;

export { StyledSearchBox, TextBoxWrapper };
