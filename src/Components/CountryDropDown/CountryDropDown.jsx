import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';

import StyledCountryDropDown from './CountryDropDown.Style';

/**
 * Uses react flags select package.
 * @return {JSX} CountryDropDown component.
 */

function CountryDropDown() {
  const [selected, setSelected] = useState('');

  return (
    <StyledCountryDropDown>
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        searchable
        fullWidth={false}
        className="countryMenu"
        optionsSize={14}
        selectedSize={16}
        searchPlaceholder=""
        selectButtonClassName="countryButton"
      />
    </StyledCountryDropDown>
  );
}
export default CountryDropDown;
