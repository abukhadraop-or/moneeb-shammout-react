import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const StyledFilterCard = styled.div`
  cursor: pointer;
  ${media.phone`
    display: flex;
    flex-direction: column;
    height: auto;
    border-radius: 0.2rem;
    text-indent: 1rem;
    margin-bottom: 0.2rem;
    border: 0.1rem solid #e3e3e3;
    box-shadow:0 0.1rem 0.5rem rgb(0 0 0 / 10%);
    min-width: 16rem;
    width: calc(16rem+1vw) ;
    margin-right:1rem;
    justify-content:center;
    justify-items:center;
    border-radius: 0.4rem;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
  `}
  ${media.desktop`
   width:calc(16rem + 1vw);

  `}
`;
export default StyledFilterCard;
