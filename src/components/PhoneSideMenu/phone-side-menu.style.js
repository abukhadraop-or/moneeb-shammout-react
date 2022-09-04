import styled, { keyframes, css } from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';
import Button from 'components/Button';
import StringDropDown from 'components/StringDropDown';

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

const showAnimation = css`
  animation-fill-mode: forwards;
  animation: ${showKeyFrames} 1s ease;
  display: block;
  opacity: 1;
`;

const hideAnimation = (animate) => css`
  animation-fill-mode: forwards;
  animation: ${animate && hideKeyframes} 1s ease-out;
  display: none;
`;

const StyledPhoneMenu = styled.div`
  background-color: ${colors.blue};
  flex-direction: column;
  height: 100%;
  padding: 0.8rem;
  position: fixed;
  width: 85%;
  z-index: 100;

  ${({ ref, showMenu }) =>
    `${typeof ref}` === 'undefined' || ref.current.display === 'none'
      ? () => (showMenu ? showAnimation : hideAnimation(false))
      : () => (showMenu ? showAnimation : hideAnimation(true))}

  ${media.desktop`
    display: none;
 `}
`;

const DropButton = styled(Button)`
  width: 9rem;
  height: 2.5rem;
`;

const SideDrop = styled(StringDropDown)`
  button {
    margin-bottom: 0.3rem;
  }
`;

const SmallFadeDrop = styled(StringDropDown)`
  button {
    width: 9rem;
    height: 2.5rem;
    font-size: 1rem;
    opacity: 0.55;
    padding-left: 0.5rem;
  }
`;
export { SmallFadeDrop, StyledPhoneMenu, DropButton, SideDrop };
