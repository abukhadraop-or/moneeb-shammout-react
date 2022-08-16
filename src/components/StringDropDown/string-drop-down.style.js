import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';

const StyledStringDropDown = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: none;
  padding-bottom: 1rem;

  ${media.desktop`
    cursor: pointer;

    ${({ dropType }) => {
      if (dropType === 'navDrops') {
        return `align-items: center;
                background-color: white;
                border: 0.1rem solid ${colors.flashyWhite};
                border-radius: 0.5rem;
                box-shadow: 0 0.1rem 0.5rem ${colors.boxShadow};
                justify-content: center;
                position: absolute;
                width: 10rem;`;
      }

      if (dropType === 'footerDrops') {
        return `align-items: left;
                background-color: transparent;
                width: 10rem;`;
      }
      return null;
    }}        
  `}
`;
export default StyledStringDropDown;
