import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';

const StyledActionDropDown = styled.div`
  background-color: ${colors.white};
  border-radius: 0.3rem;
  border: solid 0.01rem ${colors.borderGrey}26;
  bottom: 43.5rem;
  height: 5.7rem;
  left: 14.3rem;
  overflow: hidden;
  position: fixed;
  width: 10.5rem;
  z-index: 101;

  > {
    :first-child {
      border-bottom: solid 0.001rem ${colors.borderGrey}26;
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
    background-color: white;
    border-radius: 0.5rem;
    border: 0.1rem solid ${colors.flashyWhite};
    bottom:3rem;
    box-shadow: 0 0.1rem 0.5rem ${colors.boxShadow};
    color:black;
    cursor: pointer;
    height:6rem;
    left:2rem;
    position:absolute;
    width: 14rem;
    
  `}
`;

export default StyledActionDropDown;
