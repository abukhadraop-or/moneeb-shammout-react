import React from 'react';
import PropTypes from 'prop-types';
import SelectMenu from 'components/SelectMenu/select-menu';
import Title from 'components/Title/title';
import FilterCard from 'components/FilterCard/filter-card';
import { sortMap } from 'constants';

/**
 * Body sort part.
 *
 * @param {Function} onSort  Sort handler passed from Body.
 *
 * @return {Element}
 */
function SortPanel({ onSort }) {
  return (
    <FilterCard title="Sort">
      <Title title="Sort Results By" theme="light" />
      <br />
      <SelectMenu options={Object.keys(sortMap)} onChange={onSort} />
      <br />
    </FilterCard>
  );
}

SortPanel.propTypes = {
  onSort: PropTypes.func.isRequired,
};

export default SortPanel;
