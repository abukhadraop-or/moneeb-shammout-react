import { styled } from 'reuse/Packages';

const StyledFilterCard = styled.div`
  @media (min-width: 25rem) {
    display: flex;
    flex-direction: column;
    width: 95%;
    height: auto;
    min-height: 3.2rem;
    border-radius: 0.2rem;
    text-indent: 1rem;
    margin-bottom: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0.1rem 0.1rem 0.1rem 0.1rem;
  }
  @media (min-width: 50rem) {
  }
`;
export default StyledFilterCard;
