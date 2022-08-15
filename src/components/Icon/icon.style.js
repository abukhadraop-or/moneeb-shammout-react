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
  font-size: 1.4rem;
  display: flex;
  color: ${({ theme }) => themes[theme]};

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
