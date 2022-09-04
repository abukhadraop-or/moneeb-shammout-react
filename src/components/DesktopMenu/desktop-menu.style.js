import styled from 'styled-components';
import { media } from 'styles/media-query';
import Button from 'components/Button';

export const StyledDesktopMenu = styled.div`
  display: none;

  ${media.desktop`
    display: flex;
    justify-content:space-evenly;
    margin-right:2rem;
  `}
`;

export const RoutButton = styled(Button)`
  padding-left: 0.5rem;
  cursor: pointer;
  padding-bottom: 0.7rem;
`;
