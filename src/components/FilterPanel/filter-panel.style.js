import styled from 'styled-components';
import colors from 'styles/colors';

const FilterWrapper = styled.div`
  border: solid;
  border-color: transparent;
  border-bottom-color: ${colors.gray}03;
  border-width: 0.1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  overflow: hidden;
`;

const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  .genres {
    display: flex;
    padding: 0.3rem 0.9rem;
    margin: 0.4rem;
    justify-content: center;
    margin-left: 0.3rem;
    border: solid 0.1rem ${`${colors.gray}0d`};
    border-radius: 1rem;
    cursor: pointer;

    :hover {
      background-color: ${colors.lightBlue};
      color: white;
    }
  }
`;

export { FilterWrapper, FlexRowContainer };
