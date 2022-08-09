import styled from 'styled-components';

// TODO:fix css
const StyledTextField = styled.input`
  font-size: 1rem;
  width: 80%;
  height: 80%;
  border: none;
  outline: none;
  display: flex;
  color: grey;

  ::placeholder {
    color: grey;
  }
`;
export default StyledTextField;
