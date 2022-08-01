import styled, { keyframes, css } from 'styled-components';
import { media } from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

/**
 * I GET THIS ERROR WHEN TRYING TO NOT USE CSS WITH KEYFRAMES
 *
 * Error: It seems you are interpolating a keyframe declaration
 * (bvVYVr) into an untagged string. This was supported in styled-components v3,
 * but is not longer supported in v4 as keyframes are now injected on-demand.
 * Please wrap your string in the css\`\` helper which ensures the styles are injected correctly
 */
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
  ${media.phone`
    flex-direction: column;
    background-color: ${colors.blue};
    width: 85%;
    height: 100%;
    padding: 0.8rem;
    position: fixed;
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

   
 `}
  ${media.desktop`
    display: none;
 `}
`;

export default StyledPhoneMenu;
