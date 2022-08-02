import React from 'react';
import PropTypes from 'prop-types';

import SelectMenu from 'Components/SelectMenu/SelectMenu';
import Title from 'Components/Title/Title';
import FilterCard from 'Components/FilterCard/FilterCard';

import { sortMap } from 'Constants/Content';

/**
 * Create Body sort part.
 * @param {function} onSort  Sort handler passed from Body.
 * @return {JSX}  BodySort component.
 */

function BodySort({ onSort }) {
  return (
    <FilterCard title="Sort">
      <Title title="Sort Results By" theme="light" />
      <br />
      <SelectMenu optionsList={Object.keys(sortMap)} onChange={onSort} />
      <br />
    </FilterCard>
  );
}
BodySort.propTypes = {
  onSort: PropTypes.func.isRequired,
};
export default BodySort;
