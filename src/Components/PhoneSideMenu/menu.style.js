import * as constants from 'reuse/Constants';
import { styled, keyframes, css } from 'reuse/Packages';

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
  display: block;
  animation: ${showKeyFrames} 1s ease;
`;
const hideKeyframes = keyframes`
   0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-100%);
      display:none;
      }
`;
const hideAnimation = css`
  animation: ${hideKeyframes} 0.4s ease-out forwards;
`;
const hideMenu = css`
  display: none;
`;
const StyledPhoneMenu = styled.div`
  @media (min-width: 25rem) {
    flex-direction: column;
    background-color: ${constants.Blue};
    width: 85%;
    height: 100%;
    padding: 0.8rem;
    margin-top: 4rem;
    position: fixed;
    ${(props) =>
      props.firstRender
        ? hideMenu
        : () => (props.showMenu ? showAnimation : hideAnimation)};
  }
  @media (min-width: 50rem) {
    display: none;
  }
`;

export default StyledPhoneMenu;

/* @keyframes show {
    0% {
      opacity: 0;

      transform: translateX(-100%);
    }
    50% {
      opacity: 1;
      transform: translateX(90%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes hide {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    50% {
      opacity: 0.8;
      transform: translateX(60%);
    }
    100% {
      opacity: 0;
      transform: translateX(-100%);
    }
  } */
