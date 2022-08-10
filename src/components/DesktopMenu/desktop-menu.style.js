import styled from 'styled-components';
import { media } from 'styles/media-query';

const StyledDesktopMenu = styled.div`
  display: none;

  .navRoutes,
  .dropDown {
    padding-left: 0.5rem;
    padding-bottom: 0.7rem;
  }

  .dropDown {
    width: 100%;
    cursor: pointer;
    text-indent: 1rem;
    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }
  }

  ${media.desktop`
    display: flex;
    justify-content:space-evenly;
    margin-right:2rem;
  `}
`;

export default StyledDesktopMenu;