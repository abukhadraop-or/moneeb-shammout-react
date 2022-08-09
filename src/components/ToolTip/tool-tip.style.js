import styled from 'styled-components';
import colors from 'styles/colors';

const StyledToolTip = styled.span`
  visibility: hidden;

  ${(props) =>
    props.theme === 'movies'
      ? {
          'background-color': colors.black,
          border: '0.1rem solid white',
          color: colors.white,
          left: '0.3rem',
          padding: '0.4rem 0',
          position: 'absolute',
          'text-align': 'center',
          top: '9rem',
          width: '10.5rem',
          'z-index': '1',
        }
      : ''};
`;

export default StyledToolTip;
