import styled, { keyframes, css } from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';
// TODO fix css
const showKeyFrames = keyframes`
  
   0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
`;
const showAnimation = css`
  animation-fill-mode: forwards;
  animation: ${showKeyFrames} 1s ease;
  display: block;
  opacity: 1;
`;

const hideKeyframes = keyframes`
   0% {
     opacity: 1;
     transform: translateX(0%);
    }

    100% {
      opacity: 0;
      transform: translateX(-100%);
      }
      
`;
const hideAnimation = (animate) => css`
  animation-fill-mode: forwards;
  animation: ${animate && hideKeyframes} 1s ease-out;
  display: none;
`;
const StyledPhoneMenu = styled.div`
  flex-direction: column;
  background-color: ${colors.blue};
  width: 85%;
  height: 100%;
  padding: 0.8rem;
  position: fixed;
  z-index: 100;

  /**
      if current ref is undefined means not rendered yet 
       or initial animation: disable hide animation
      else show all animations
    */
  ${(props) =>
    `${typeof props.ref}` === 'undefined' ||
    props.ref.current.display === 'none'
      ? () => (props.showMenu ? showAnimation : hideAnimation(false))
      : () => (props.showMenu ? showAnimation : hideAnimation(true))}

  ${media.desktop`
    display: none;
 `}
`;

export default StyledPhoneMenu;
