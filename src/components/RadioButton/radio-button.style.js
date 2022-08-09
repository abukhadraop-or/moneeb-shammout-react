import styled from 'styled-components';
import colors from 'styles/colors';

const Label = styled.label`
  display: flex;
  flex-direction: row;
  position: relative;
  cursor: pointer;
  font-size: 1rem;
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
