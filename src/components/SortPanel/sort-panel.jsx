import React from 'react';
import PropTypes from 'prop-types';
import SelectMenu from 'components/SelectMenu/select-menu';
import Title from 'components/Title/title';
import FilterCard from 'components/FilterCard/filter-card';
import { sortMap } from 'constants';

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
      <br />
      <SelectMenu options={Object.keys(sortMap)} onChange={onChange} />
      <br />
    </FilterCard>
  );
}

SortPanel.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SortPanel;
