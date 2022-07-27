import { styled, css } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const underNav = css`
  bottom: 45%;
  padding-bottom: 0;
`;
const overrideNav = css`
  padding-bottom: 4rem;
`;
const StyldeSearchPanel = styled.div`
  @media (min-width: 25rem) {
    display: block;
    font-size: 1rem;
    width: 100%;
    color: grey;
    position: fixed;
    background-color: ${constants.White};
    ${(props) => (props.navVisibile ? underNav : overrideNav)};
    margin-bottom: 2.5rem;
  }
  @media (min-width: 50rem) {
    width: 70%;
    padding-left: 15rem;
    padding-bottom: 3.7rem;
    display: flex;
    flex-direction: column;
    z-index: 1;
  }
`;
export default StyldeSearchPanel;
