import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';

const StyledDesktopMenu = styled.div`
  display: none;

  .navRoutes,
  .dropDown {
    padding-left: 0.5rem;
    padding-bottom: 0.7rem;
  }

  .dropDown {
    cursor: pointer;
    text-indent: 1rem;
    width: 100%;

    &:hover {
      background-color: ${colors.gray}08;
    }
  }

  ${media.desktop`
    display: flex;
    justify-content:space-evenly;
    margin-right:2rem;
  `}
`;

export default StyledDesktopMenu;
