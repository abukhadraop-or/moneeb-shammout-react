import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';

const StyledFilterCard = styled.div`
  -webkit-tap-highlight-color: transparent;
  border-radius: 0.4rem;
  border: 0.1rem solid ${colors.flashyWhite};
  box-shadow: 0 0.1rem 0.5rem ${colors.boxShadow};
  cursor: pointer;
  display: flex;
  flex-direction: column;

  flex-wrap: wrap;
  height: auto;
  justify-content: space-between;
  justify-items: center;
  margin-bottom: 0.2rem;
  margin-right: 1rem;
  min-width: 16rem;
  text-indent: 1rem;

  ${media.desktop`
    width:17rem;
  `}
`;
export default StyledFilterCard;
