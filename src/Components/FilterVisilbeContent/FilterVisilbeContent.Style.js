import { styled } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const StyledFilterDropDown = styled.div`
  @media (min-width: 25rem) {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    height: 3.2rem;
    border-radius: 0.2rem;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
    :active {
      background-color: ${constants.Light_Blue};
    }
    :not(:active) {
      background-color: ${constants.White};
    }
  }
`;
export default StyledFilterDropDown;
