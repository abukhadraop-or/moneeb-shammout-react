import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const StyledFilterDropDown = styled.div`
  ${media.phone`
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
      background-color: ${colors.lightBlue};
    }
    :not(:active) {
      background-color: ${colors.white};
    }
 `}
  ${media.desktop`
  height:3rem;
  ${(props) =>
    props.showBorder
      ? {
          border: 'solid',
          'border-color': 'transparent',
          'border-width': '0.1rem',
          // eslint-disable-next-line sort-keys
          'border-bottom-color': 'rgba(0,0,0,0.1)',
        }
      : ''}};
  /* border:solid 0.1rem;
  border-color:transparent;
  border-bottom-color: rgba(0,0,0,0.2); */
  `}
`;
export default StyledFilterDropDown;
