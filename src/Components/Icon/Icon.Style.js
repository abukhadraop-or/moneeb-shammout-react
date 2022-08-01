import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const theme = {
  black: colors.black,
  blue: colors.lightBlue,
  grey: colors.grey,
  lightGrey: colors.lightGrey,
  transparent: 'transparent',
  white: colors.white,
};

const StyledIcon = styled.i`
  font-size: 1.4rem;
  display: flex;
  color: ${(props) => theme[props.theme]};
  ${(props) =>
    props.theme === 'transparent'
      ? {
          color: colors.white,
          'font-size': '1.5rem',
          opacity: 0.5,
        }
      : {}};
  &:hover {
    ${(props) =>
      props.hoverEffect
        ? {
            color: `${colors.lightBlue}`,
            opacity: 1,
          }
        : ''}
  }
  ${media.phone`
  `}
`;

export default StyledIcon;
