import styled from 'styled-components';
import { media } from 'styles/media-query';

const LogoContainer = styled.div`
  display: flex;
  height: 4.6rem;
  width: 3rem;

  ${media.desktop`
    display: flex;

    ${({ theme }) => {
      if (theme === 'desktopFooter') {
        return `display: flex;
                height: 12rem;
                width: 10rem;`;
      }

      if (theme === 'desktopNav') {
        return `display: block;
                height: 2rem;
                margin-left: 1rem;
                width: 10rem;`;
      }
      return null;
    }}
  
  `}
`;

export default LogoContainer;
