import { styled } from 'reuse/Packages';

const StyledBody = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: 1.3rem;
  padding-top: 4rem;
  @media (min-width: 50rem) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export default StyledBody;
