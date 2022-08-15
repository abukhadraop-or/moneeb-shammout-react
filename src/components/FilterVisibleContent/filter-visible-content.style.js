import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';

const StyledFilterDropDown = styled.div`
  align-items: center;
  border-radius: 0.2rem;
  box-sizing: border-box;
  display: flex;
  font-size: 1.1rem;
  font-weight: 600;
  height: 3.2rem;
  justify-content: space-between;
  padding-right: 1rem;
  width: 100%;

  :active {
    background-color: ${colors.weakBlue};
  }

  ${({ showBorder }) =>
    showBorder
      ? ` border: solid transparent;
          border-bottom-color: ${colors.gray}03;
          border-width: 0.1rem;
          margin-bottom: 1rem;`
      : ''};

  ${media.desktop`
     height:3rem;

  `}
`;

export default StyledFilterDropDown;
