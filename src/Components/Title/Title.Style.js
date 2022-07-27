import { styled, css } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const light = css`
  font-size: 1rem;
  font-weight: 300;
`;
const medium = css`
  font-size: 1rem;
  font-weight: 400;
`;
const bold = css`
  font-size: 1.6rem;
  font-weight: 600;
`;
const popularHeader = css`
  @media (min-width: 25rem) {
    font-size: 1.6rem;
    font-weight: 600;
  }
  @media (min-width: 50rem) {
    position: absolute;
    top: 7%;
    left: 10.5%;
  }
`;
const smallBold = css`
  font-size: 1rem;
  font-weight: 600;
`;
const moviesBold = css`
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  :hover {
    color: ${constants.Light_Blue};
  }
`;
const smallLight = css`
  font-size: 0.8rem;
  font-weight: 300;
  @media (min-width: 50rem) {
    font-size: 1rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 6);
  }
`;
const theme = {
  bold,
  light,
  medium,
  moviesBold,
  popularHeader,
  smallBold,
  smallLight,
};
const StyledTitle = styled.h2`
  display: flex;
  ${(props) => theme[props.theme]}/* @media (min-width: 25rem) {
    width: 100%;
    height: auto;
  } */
`;

export default StyledTitle;
