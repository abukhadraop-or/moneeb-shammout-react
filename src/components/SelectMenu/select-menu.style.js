import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';

const StyledSelectMenu = styled.div`
  background-color: ${colors.mediumGrey};
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -3 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='10 9 12 12 14 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-position: right 0.1rem center;
  background-repeat: no-repeat;
  border-color: transparent;
  border-radius: 0.3rem;
  color: ${colors.black};
  cursor: pointer;
  height: 2.2rem;
  margin: 0rem 1rem;
  padding-left: 0.2rem;

  ${media.desktop`
    width:15rem;
  `}

  .menuTitle {
    align-items: center;
    padding-top: 0.6rem;
    text-align: center;
  }
`;

const OptionContainer = styled.div`
  background-color: transparent;
  border: solid;
  border-color: transparent;
  border-radius: 0.25rem;
  margin-top: 1rem;
  max-height: 10rem;
  overflow-x: hidden;
  overflow-y: scroll;
  position: sticky;
  white-space: nowrap;
  width: 100%;
  z-index: 99;

  ${media.desktop`
    width: 15rem;
  `}
`;

const Option = styled.div`
  background-color: ${colors.white};
  font-size: 0.9rem;
  font-weight: 400;
  height: auto;
  padding: 0.5rem 0;
  width: 100%;

  ${({ selected, content }) =>
    selected === content
      ? ` background-color: ${colors.whiteGrey};
          color: ${colors.black};
          font-weight: 700;`
      : ''};

  &:hover,
  :focus {
    ${({ selected, content }) =>
      selected === content
        ? ` background-color: ${colors.lightBlue};
            color: ${colors.white};`
        : ''};
  }
`;

export { StyledSelectMenu, Option, OptionContainer };
