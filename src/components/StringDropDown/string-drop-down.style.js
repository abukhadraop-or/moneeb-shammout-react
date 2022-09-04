import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';
import Button from 'components/Button';

export const StyledStringDropDown = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: none;
  padding-bottom: 1rem;

  ${media.desktop`
    cursor: pointer;

    ${({ dropType }) => {
      if (dropType === 'navDrops') {
        return `
                align-items: center;
                background-color: white;
                border-radius: 0.2rem;
                border: 0.1rem solid ${colors.flashyWhite};
                box-shadow: 0 0.1rem 0.5rem ${colors.boxShadow};
                position: absolute;

                `;
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

export const NavButton = styled(Button)`
  padding: 0.5rem 4rem 0.3rem 0.2rem;
  text-indent: 1rem;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: ${colors.gray}08;
  }
`;
