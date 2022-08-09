import styled from 'styled-components';

const FilterWrapper = styled.div`
  border: solid;
  border-color: transparent;
  border-bottom-color: rgba(0, 0, 0, 0.1);
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
`;

export { FilterWrapper, FlexRowContainer };
