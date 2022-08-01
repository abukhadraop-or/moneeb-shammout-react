import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

import colors from 'Styles/Colors';

const Option = styled.div`
  width: 95%;
  height: auto;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  font-size: 0.9rem;
  font-weight: 400;
  box-sizing: border-box;
  background-color: ${colors.white};

  ${(props) =>
    props.selected === props.content
      ? {
          'background-color': `${colors.whiteGrey}`,
          color: ` ${colors.black}`,
          'font-weight': '700',
        }
      : ''};
  &:hover,
  :focus {
    ${(props) =>
      props.selected === props.content
        ? {
            'background-color': `${colors.lightBlue}`,
            color: `${colors.white}`,
          }
        : null};
  }
`;
const OptionContainer = styled.div`
  width: calc(78% + 1vw);
  max-height: 10rem;
  overflow-y: scroll;
  overflow-x: visible;
  box-sizing: border-box;
  position: absolute;
  white-space: nowrap;
  border: solid;
  border-radius: 0.25rem;
  border-color: transparent;
  margin-top: 1rem;
  background-color: white;
  ${media.desktop`
  width: 13rem;
    height: auto;
  `}
`;

const StyledSelectMenu = styled.ul`
  display: block;
  cursor: pointer;
  ${media.phone`
    width: inherit;
    height: 0.5rem;
    border-radius: 0.3rem;
    border-color: transparent;
    padding-left: 0.2rem;
    padding-bottom: 2rem;
    margin: 0rem 1rem 0 1rem;
    color: ${colors.black};
    &:focus,:active,:hover{
      background-color: ${colors.mediumGrey};
    }
    background-color: transparent;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -3 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='10 9 12 12 14 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.1rem center;
  `}
  ${media.desktop`
  background-color: ${colors.mediumGrey};

    width: 80%;
  `}
`;

export { StyledSelectMenu, Option, OptionContainer };
