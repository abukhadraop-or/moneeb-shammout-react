import styled from 'styled-components';
import colors from 'styles/colors';
import { fontWeight, fontSize } from 'styles/fonts';

const StyledTitle = styled.h2`
  display: flex;
  font-weight: ${(props) => fontWeight[props.fontWeight]};
  color: ${(props) => colors[props.color]};
  font-size: ${(props) => fontSize[props.fontSize]};
`;

export default StyledTitle;
