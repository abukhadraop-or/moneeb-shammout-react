import { css } from 'styled-components';

export const breakpoint = {
  desktop: '65rem',
};

export const media = {
  desktop: (...args) =>
    css`
      @media screen and (min-width: ${breakpoint.desktop}) {
        ${css(...args)}
      }
    `,
};
