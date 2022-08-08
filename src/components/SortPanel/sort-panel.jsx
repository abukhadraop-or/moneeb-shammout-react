import React from 'react';
import PropTypes from 'prop-types';

import SelectMenu from 'components/SelectMenu/SelectMenu';
import Title from 'components/Title/Title';
import FilterCard from 'components/FilterCard/filter-card';
import { sortMap } from 'Constants/Content';

/**
 * Body sort part.
 *
 * @param {function} onSort  Sort handler passed from Body.
 *
 * @return {Element}  .
 */

function SortPanel({ onSort }) {
  return (
    <FilterCard title="Sort">
      <Title title="Sort Results By" theme="light" />
      <br />
      <SelectMenu optionsList={Object.keys(sortMap)} onChange={onSort} />
      <br />
    </FilterCard>
  );
}
SortPanel.propTypes = {
  onSort: PropTypes.func.isRequired,
};
export default SortPanel;
