import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

import colors from 'Styles/Colors';

const StyledTextField = styled.input`
  ${media.phone`
    font-size: 1rem;
    width: 80%;
    height: 80%;
    border: none;
    outline: none;
    display: flex;
    color: grey;
    ::placeholder {
      color: ${colors.lightGrey};
      font-style: italic;
    }
  `}
`;
export default StyledTextField;
