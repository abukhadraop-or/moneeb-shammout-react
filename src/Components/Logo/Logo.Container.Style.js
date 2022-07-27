import { styled, css } from 'reuse/Packages';

const desktopNav = css`
  width: 1.5em;
  height: 1.5rem;
`;
const desktopFooter = css`
  width: 4rem;
  height: 10rem;
  display: flex;
`;
const theme = {
  desktopFooter,
  desktopNav,
};
const LogoContainer = styled.div`
  @media (min-width: 25rem) {
    width: 4.2rem;
    height: 4.2rem;
  }
  @media (min-width: 50rem) {
    display: flex;
    ${(props) => theme[props.theme]};
  }
`;

export default LogoContainer;
