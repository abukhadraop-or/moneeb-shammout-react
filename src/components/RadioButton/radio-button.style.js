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
  background-color: white;
  border-radius: 100%;
  display: flex;

  border: ${({ checked }) =>
    checked ? 'solid 0.4red' : `solid 0.1rem ${colors.gray}0d`};

  border-color: ${({ checked }) =>
    checked ? `${colors.lightBlue}` : ` ${colors.gray}0d`};

  width: ${({ checked }) => (checked ? '0.4rem' : '0.8rem')};

  height: ${({ checked }) => (checked ? '0.4rem' : '0.8rem')};

  margin-left: ${({ checked }) => (checked ? '0.4rem' : '0.5rem')};
`;

export { StyledRadioButton, Label };
