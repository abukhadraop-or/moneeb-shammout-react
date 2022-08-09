import styled from 'styled-components';
import { media } from 'styles/media-query';

const StyledFilterDropDown = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  height: 3.2rem;
  border-radius: 0.2rem;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  font-size: 1.1rem;
  font-weight: 600;

  :active {
    background-color: #add8e6;
  }

  ${(props) =>
    props.showBorder
      ? {
          border: 'solid',
          'border-color': 'transparent',
          // eslint-disable-next-line sort-keys
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
