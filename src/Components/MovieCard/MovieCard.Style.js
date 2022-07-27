import { styled, css } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const blurCSS = css`
  -webkit-filter: blur(0.3rem);
  filter: blur(0.3rem);
`;
const StyledMovieCard = styled.div`
  @media (min-width: 25rem) {
    height: auto;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    border: solid 0.02rem;
    border-color: ${constants.white_Grey};
    margin-bottom: 0.5rem;
  }
  @media (min-width: 50rem) {
    margin: 1rem;

    max-height: 20rem;
    width: 17%;
    border: none;
    :hover {
      cursor: pointer;
    }
    ${(props) => (props.blur ? blurCSS : null)}
  }
`;
export default StyledMovieCard;
