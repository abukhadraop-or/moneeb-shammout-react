import styled from 'styled-components';
// import {media} from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const Label = styled.label`
  display: flex;
  flex-direction: row;
  position: relative;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0 0.5rem 0.5rem 0.5rem;
  font-weight: ${(props) => (props.checked ? '600' : '300')};
`;

const StyledRadioButton = styled.span`
  display: flex;
  background-color: white;
  border-radius: 100%;
  margin-left: 0.5rem;

  ${(props) =>
    props.checked
      ? {
          border: 'solid 0.4rem',
          'border-color': `${colors.lightBlue}`,
          height: '0.6rem',
          'margin-left': '0.4rem',
          width: '0.6rem',
        }
      : {
          'background-color': 'rgba(0,0,0,0.07)',
          border: 'solid 0.1rem',
          height: '1rem',
          width: '1rem',
        }};
`;

export { StyledRadioButton, Label };
