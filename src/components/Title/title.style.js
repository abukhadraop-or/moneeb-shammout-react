import styled from 'styled-components';
import colors from 'styles/colors';
import { fontWeight, fontSize } from 'styles/fonts';

const StyledTitle = styled.h2`
  display: flex;
  font-weight: ${({ fontWeight: weight }) => fontWeight[weight]};
  color: ${({ color }) => colors[color]};
  font-size: ${({ fontSize: size }) => fontSize[size]};
  gap: 0.5rem;
`;

export default StyledTitle;
