import { styled } from 'reuse/Packages';

const StyledTextField = styled.input`
  @media (min-width: 25rem) {
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
  }
`;
export default StyledTextField;
