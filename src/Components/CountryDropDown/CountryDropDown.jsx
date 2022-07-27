import { React, useState } from 'reuse/Packages';
import ReactFlagsSelect from 'react-flags-select';
import StyledCountryDropDown from './CountryDropDownStyle';

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
