import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import { StyledCountryDropDown } from './country-drop-down.style';

/**
 * Uses react flags select package.
 *
 * @return {Element} CountryDropDown component.
 */
function CountryDropDown() {
  const [selected, setSelected] = useState('');

  return (
    <StyledCountryDropDown>
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        fullWidth
        alignOptions="left"
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
