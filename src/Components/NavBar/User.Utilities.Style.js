import { styled } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const StyledUserUtilities = styled.div`
  @media (min-width: 25rem) {
    background-color: ${constants.White};
    bottom: 82.5%;
    left: 51.5%;
    display: block !important;
    flex-direction: column;
    position: absolute;
    width: 12rem;
    height: 6rem;
    box-shadow: 0.01rem 0.01rem 0.01rem 0.01rem grey;
    box-shadow: rgba(0, 0, 0, 0.24) 0.1rem 0.1rem 0.1rem 0.1rem;
    justify-content: space-between;

    white-space: nowrap;
    border-radius: 0.5rem;
    > * {
      &:first-child {
        border-bottom: solid 0.001rem grey;
      }
      &:first-child:hover {
        background-color: ${constants.Dark_Blue};
        color: ${constants.White};
      }
      &:nth-child(2):hover {
        background-color: ${constants.Dark_Blue};
        color: ${constants.White};
      }
    }
  }
`;

export default StyledUserUtilities;
