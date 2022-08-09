import styled from 'styled-components';
import colors from 'styles/colors';
// TODO fix css
const StyledToolTip = styled.span`
  visibility: hidden;
  ${(props) =>
    props.theme === 'movies'
      ? {
          'background-color': colors.black,
          border: '0.1rem solid white',
          color: colors.white,
          left: '2.5%',
          padding: '0.4rem 0',
          position: 'absolute',
          'text-align': 'center',
          top: '50%',
          width: '10.5rem',
          'z-index': '1',
        }
      : ''};
  ${(props) =>
    props.theme === 'filters'
      ? {
          '-webkit-box-orient': 'horizontal',
          '-webkit-line-clamp': '1',
          'background-color': colors.darkBlue,
          'border-radius': '0.3rem',
          color: colors.white,
          display: '-webkit-box',
          'font-size': '0.95rem',
          height: '1.1rem',
          left: '31%',
          'min-width': '16rem',
          padding: '0.4rem 0',
          position: 'absolute',
          top: '10.5%',
          visibility: 'visible',
        }
      : ''};
  ::after {
    content: ' ';
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -1.4rem;
    border-width: 0.4rem;
    border-style: solid;
    border-color: ${colors.darkBlue} transparent transparent transparent;
  }
`;

export default StyledToolTip;
