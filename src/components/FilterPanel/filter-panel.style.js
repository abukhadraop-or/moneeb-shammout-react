import styled from 'styled-components';

const FilterWrapper = styled.div`
  border: solid;
  border-color: transparent;
  border-width: 0.1rem;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

const ToolTipWrapper = styled.div`
  position: absolute;
  width: 100%;
`;

const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export { FilterWrapper, FlexRowContainer, ToolTipWrapper };
