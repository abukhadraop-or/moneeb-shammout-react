import { css } from 'styled-components';

export const breakpoint = {
  desktop: '65rem',
  phone: '0rem',
};

export const media = {
  desktop: (...args) =>
    css`
      @media screen and (min-width: ${breakpoint.desktop}) {
        ${css(...args)}
      }
    `,
  phone: (...args) =>
    css`
      @media screen and (min-width: ${breakpoint.phone}) {
        ${css(...args)}
      }
    `,
};
