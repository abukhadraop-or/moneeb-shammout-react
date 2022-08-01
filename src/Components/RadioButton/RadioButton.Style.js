import styled from 'styled-components';
// import {media} from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const Label = styled.label`
  display: flex;
  flex-direction: row;
  position: relative;
  cursor: pointer;
  font-size: 1.1rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0.5rem;
  font-weight: ${(props) => (props.checked ? '600' : '300')};
`;

const StyledRadioButton = styled.span`
  display: flex;
  background-color: white;
  border-radius: 100%;
  ${(props) =>
    props.checked
      ? {
          border: 'solid 0.3rem',
          'border-color': `${colors.lightBlue}`,
          height: '0.6rem',
          width: '0.6rem',
        }
      : {
          border: 'solid 0.1rem',
          height: '1rem',
          width: '1rem',
        }};
`;

export { StyledRadioButton, Label };
