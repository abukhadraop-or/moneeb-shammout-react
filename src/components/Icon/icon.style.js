import styled from 'styled-components';
import colors from 'styles/colors';

const themes = {
  black: colors.black,
  blue: colors.lightBlue,
  grey: colors.grey,
  lightGrey: colors.lightGrey,
  none: 'transparent',
  transparent: colors.white,
  white: colors.white,
};

const StyledIcon = styled.i`
  color: ${({ theme }) => themes[theme]};
  display: flex;
  font-size: 1.4rem;

  ${({ theme }) =>
    theme === 'transparent'
      ? ` font-size: 1.5rem;
          opacity: 0.5;`
      : ''};

  &:hover {
    ${({ hoverEffect }) =>
      hoverEffect
        ? ` color: ${colors.lightBlue};
            opacity: 1;`
        : ''}
  }
`;

export default StyledIcon;
