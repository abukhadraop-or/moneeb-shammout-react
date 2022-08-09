import styled from 'styled-components';
import { media } from 'styles/media-query';

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
    background-color: #add8e6;
  }

  ${(props) =>
    props.showBorder
      ? {
          border: 'solid transparent',
          'border-bottom-color': 'rgba(0,0,0,0.1)',
          'border-width': '0.1rem',
          'margin-bottom': '1rem',
        }
      : ''};

  ${media.desktop`
     height:3rem;

  `}
`;

export default StyledFilterDropDown;
