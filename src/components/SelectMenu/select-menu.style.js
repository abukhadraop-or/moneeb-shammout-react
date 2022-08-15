import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';

const StyledSelectMenu = styled.div`
  display: block;
  cursor: pointer;
  width: inherit;
  height: 0.5rem;
  border-radius: 0.3rem;
  border-color: transparent;
  padding-left: 0.2rem;
  padding-bottom: 2rem;
  margin: 0rem 1rem;
  color: ${colors.black};
  background-color: ${colors.mediumGrey};
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -3 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='10 9 12 12 14 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.1rem center;

  .menuTitle {
    text-align: center;
    align-items: center;
    padding-top: 0.6rem;
  }

  ${media.desktop`
    width:15rem;
  `}
`;

const OptionContainer = styled.div`
  background-color: white;
  border: solid;
  border-color: transparent;
  border-radius: 0.25rem;
  box-sizing: border-box;
  margin-top: 1rem;
  max-height: 10rem;
  overflow-x: hidden;
  overflow-y: scroll;
  white-space: nowrap;
  width: 100%;
  position: sticky;
  z-index: 99;

  ${media.desktop`
    width: 15rem;
  `}
`;

const Option = styled.div`
  background-color: ${colors.white};
  box-sizing: border-box;
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
        : null};
  }
`;

export { StyledSelectMenu, Option, OptionContainer };
