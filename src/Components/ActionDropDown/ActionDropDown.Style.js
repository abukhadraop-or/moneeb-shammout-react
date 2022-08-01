import styled from 'styled-components';

import { media } from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const StyledActionDropDown = styled.div`
  ${media.phone`
    background-color: ${colors.white};
    bottom: 82.5%;
    left: 51.5%;
    z-index:1;
    display: block !important;
    flex-direction: column;
    position: fixed;
    width: 12rem;
    height: 6rem;
    border: solid 0.01rem  rgba(33,37,41,0.15);
    justify-content: space-between;
    border-radius: 0.3rem;
    > * {
      &:first-child {
        border-bottom: solid 0.001rem rgba(33,37,41,0.15);
      }
      &:first-child:hover {
        background-color: ${colors.darkBlue};
        color: ${colors.white};
      }
      &:nth-child(2):hover {
        background-color: ${colors.darkBlue};
        color: ${colors.white};
      }

    }
    ${media.desktop`
            position:absolute;
            'background-color': 'white',
            border: '0.1rem solid #e3e3e3',
            'border-radius': '0.5rem',
            'box-shadow': '0 0.1rem 0.5rem rgb(0 0 0 / 10%)',
            cursor: 'pointer',
            color:black;
            width: '12rem',
            height:10rem
    `}
  `}
`;

export default StyledActionDropDown;
