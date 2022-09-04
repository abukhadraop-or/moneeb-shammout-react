import styled from 'styled-components';
import colors from 'styles/colors';

const StyledFilterCard = styled.div`
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  border-radius: 0.4rem;
  border: 0.1rem solid ${colors.flashyWhite};
  box-shadow: 0 0.1rem 0.5rem ${colors.boxShadow};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: auto;
  justify-content: space-between;
  justify-items: center;
  text-indent: 1rem;
  width: 100%;
`;
export default StyledFilterCard;
