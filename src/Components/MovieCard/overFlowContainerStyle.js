import { styled } from 'reuse/Packages';
// import * as constants from 'reuse/Constants';

const StlyedOverFlowContainer = styled.div`
  @media (min-width: 25rem) {
    font-size: 0.8rem;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 1rem; /* fallback */
    max-height: 2rem; /* fallback */
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
  @media (min-width: 50rem) {
    display: none;
  }
`;
export default StlyedOverFlowContainer;
