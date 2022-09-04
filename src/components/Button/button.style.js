import styled from 'styled-components';
import colors from 'styles/colors';
import { fontWeight, fontSize } from 'styles/fonts';

export const StyledButton = styled.button`
  display: flex;
  border: none;
  font-weight: ${(props) => fontWeight[props.fontWeight]};

  color: ${({ disabled, color }) =>
    disabled ? `${colors.gray}80` : colors[color]};

  background-color: ${({ disabled }) =>
    disabled !== null ? `${colors.gray}1a !important` : 'transparent'};

  cursor: ${({ disabled }) =>
    disabled !== null ? `not-allowed !important` : ''};

  font-size: ${(props) => fontSize[props.fontSize]};
`;
