import styled from 'styled-components';
import colors from 'styles/colors';

const Label = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  font-weight: ${({ checked }) => (checked ? '600' : '300')};
  padding: 0 0.5rem 0.5rem 0.5rem;
  position: relative;
`;

const StyledRadioButton = styled.span`
  border-radius: 100%;
  display: flex;

  background-color: ${({ checked }) =>
    checked ? `${colors.white}` : `${colors.lightGray}`};

  border: ${({ checked }) =>
    checked ? `solid 0.4rem ` : `solid 0.1rem ${colors.gray}0d`};

  border-color: ${({ checked }) =>
    checked ? `${colors.lightBlue}` : ` ${colors.gray}0d`};

  width: ${({ checked }) => (checked ? '1.1rem' : '1rem')};

  height: ${({ checked }) => (checked ? '1.1rem' : '1rem')};
`;

export { StyledRadioButton, Label };
