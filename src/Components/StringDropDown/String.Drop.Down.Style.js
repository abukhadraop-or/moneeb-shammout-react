import { styled, css } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const navDrops = css`
  position: absolute;
  background-color: white;
  cursor: pointer;
  width: 8rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`;
const movieDrops = css``;
const footerDrops = css``;
const types = {
  footerDrops,
  movieDrops,
  navDrops,
};
const StyledStringDropDown = styled.div`
  @media (min-width: 25rem) {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    color: ${constants.White};
    border: none;
    padding-bottom: 1rem;
  }
  @media (min-width: 50rem) {
    ${(props) => types[props.dropType]};
  }
`;
export default StyledStringDropDown;
