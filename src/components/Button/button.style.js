import styled from 'styled-components';
import colors from 'styles/colors';
import { fontWeight, fontSize } from 'styles/fonts';

const StyledButton = styled.button`
  display: flex;
  border: none;
  font-weight: ${(props) => fontWeight[props.fontWeight]};

  color: ${(props) =>
    props.disabled ? `rgba(0,0,0,0.5)` : colors[props.color]};

  background-color: ${(props) =>
    props.disabled !== null ? 'rgba(0,0,0,0.1) !important' : 'transparent'};

  font-size: ${(props) => fontSize[props.fontSize]};
`;

export default StyledButton;
