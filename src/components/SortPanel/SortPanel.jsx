import React from 'react';
import PropTypes from 'prop-types';
import SelectMenu from 'components/SelectMenu/SelectMenu';
import Title from 'components/Title/Title';
import FilterCard from 'components/FilterCard/FilterCard';
import { sortMap } from 'constants';
import SelectWrapper from './sort-panel.style';

/**
 * Body sort part.
 *
 * @param {Function} onChange  Sort change handler passed from Body.
 *
 * @return {Element}
 */
function SortPanel({ onChange }) {
  return (
    <FilterCard title="Sort">
      <Title title="Sort Results By" fontSize="medium" />
      <SelectWrapper>
        <SelectMenu options={Object.keys(sortMap)} onChange={onChange} />
      </SelectWrapper>
    </FilterCard>
  );
}

SortPanel.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SortPanel;
