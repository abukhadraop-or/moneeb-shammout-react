import styled from 'styled-components';
import colors from 'styles/colors';

const Label = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  font-weight: ${(props) => (props.checked ? '600' : '300')};
  padding: 0 0.5rem 0.5rem 0.5rem;
  position: relative;
`;

const StyledRadioButton = styled.span`
  background-color: white;
  border-radius: 100%;
  display: flex;
  margin-left: 0.5rem;

  ${(props) =>
    props.checked
      ? {
          border: 'solid 0.4rem',
          'border-color': `${colors.lightBlue}`,
          height: '0.4rem',
          'margin-left': '0.4rem',
          width: '0.4rem',
        }
      : {
          'background-color': 'rgba(0,0,0,0.05)',
          border: 'solid 0.1rem rgba(0,0,0,0.05)',
          height: '0.8rem',
          width: '0.8rem',
        }};
`;

export { StyledRadioButton, Label };
