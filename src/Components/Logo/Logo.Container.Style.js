import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const LogoContainer = styled.div`
  ${media.phone`
    width: 3rem;
    height: 4.6rem;
    display:flex;
  `}
  ${media.desktop`
    display: flex;
    ${(props) =>
      props.theme === 'desktopFooter'
        ? {
            display: 'flex',
            height: '12rem',
            width: '10rem',
          }
        : null};
    ${(props) =>
      props.theme === 'desktopNav'
        ? {
            display: 'block',
            height: '2rem',
            'margin-left': '1rem',
            width: '10rem',
          }
        : null};
  `}
`;

export default LogoContainer;
