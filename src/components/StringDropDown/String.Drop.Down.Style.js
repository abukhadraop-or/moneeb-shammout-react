import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const StyledStringDropDown = styled.div`
  ${media.phone`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    border: none;
    padding-bottom: 1rem;
 `}
  ${media.desktop`
  cursor: pointer;
    ${(props) =>
      props.dropType === 'navDrops'
        ? {
            'align-items': 'center',
            'background-color': 'white',
            border: '0.1rem solid #e3e3e3',
            'border-radius': '0.5rem',
            'box-shadow': '0 0.1rem 0.5rem rgb(0 0 0 / 10%)',
            'justify-content': 'center',
            position: 'absolute',
            width: '10rem',
          }
        : ''};
    ${(props) =>
      props.dropType === 'footerDrops'
        ? {
            'align-items': 'left',
            'background-color': 'transparent',
            width: '10rem',
          }
        : ''};
  `}
`;
export default StyledStringDropDown;
