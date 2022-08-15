import React, { useState } from 'react';
import Title from 'components/Title/Title';
import FilterCard from 'components/FilterCard/FilterCard';
import Icon from 'components/Icon/Icon';
import RadioButton from 'components/RadioButton/RadioButton';
import CheckBox from 'components/CheckBox/CheckBox';
import CountryDropDown from 'components/CountryDropDown/CountryDropDown';
import DatePicker from 'components/DatePicker/DatePicker';
import Button from 'components/Button/Button';
import SelectMenu from 'components/SelectMenu/SelectMenu';
import {
  availabilitiesList,
  filtersList,
  releaseList,
  genresList,
  languagesList,
} from 'constants';
import { FilterWrapper, FlexRowContainer } from './filter-panel.style';

/**
 * Body filter part.
 *
 * @return {Element}
 */
function FilterPanel() {
  const [radioBtnState, setRadioBtnState] = useState({
    [filtersList[0]]: true,
    [filtersList[1]]: false,
    [filtersList[2]]: false,
  });
  const [showAvailability, setShowAvailability] = useState(false);
  const [showReleaseDates, setShowReleaseDates] = useState(false);
  const [showCountryDrop, setShowCountryDrop] = useState(false);

  /**
   * Check or uncheck radio button.
   *
   * @param {string}  id Radio button identifier.
   */
  const filtersChangeHandler = (id) => {
    setRadioBtnState((prevState) => {
      const newData = {
        [filtersList[0]]: false,
        [filtersList[1]]: false,
        [filtersList[2]]: false,
        [id]: !prevState[id],
      };
      return newData;
    });
  };

  /**
   * Show or hide availabilities checkboxes.
   */
  const toggleAvailability = () => {
    setShowAvailability((prevState) => !prevState);
  };

  /**
   * Show or hide Release checkboxes.
   */
  const toggleReleaseDates = () => {
    setShowReleaseDates((prevState) => !prevState);
    setShowCountryDrop(false);
  };

  /**
   * Show or hide country drop down.
   *
   * @param {boolean} show Show or hide country drop.
   */
  const toggleCountryDrop = (show) => {
    setShowCountryDrop(show);
  };

  return (
    <FilterCard title="Filters">
      <Title title="Show Me" fontSize="medium">
        <Icon id="icon" color="grey" iconName="HiQuestion" />
      </Title>

      <FilterWrapper>
        {filtersList.map((label) => (
          <RadioButton
            label={label}
            id={label}
            key={label}
            onChange={filtersChangeHandler}
            checked={radioBtnState[label]}
          />
        ))}
      </FilterWrapper>

      <Title title="Availabilities" fontSize="medium" />

      <FilterWrapper>
        {availabilitiesList.map((item) => (
          <CheckBox
            checked
            label={item}
            onCheck={availabilitiesList[0] === item ? toggleAvailability : null}
            itemVisibility={
              availabilitiesList[0] === item ? true : showAvailability
            }
            key={item}
          />
        ))}
      </FilterWrapper>
      <Title title="Release Dates" fontSize="medium" />

      <CheckBox
        checked
        label={releaseList[0]}
        onCheck={toggleReleaseDates}
        itemVisibility
        key={releaseList[0]}
      />
      <CheckBox
        checked
        label={releaseList[1]}
        itemVisibility={showReleaseDates}
        key={releaseList[1]}
        onCheck={toggleCountryDrop}
      />
      {showCountryDrop && <CountryDropDown />}
      {releaseList.slice(2).map((item) => (
        <CheckBox
          label={item}
          onCheck={releaseList[0] === item ? toggleReleaseDates : null}
          itemVisibility={releaseList[0] === item ? true : showReleaseDates}
          key={item}
        />
      ))}

      <FilterWrapper>
        <DatePicker label="from" />
        <DatePicker initialDate={new Date('2/11/2023')} label="to" />
      </FilterWrapper>

      <FilterWrapper>
        <Title fontSize="medium" title="Genres" />
        <FlexRowContainer>
          {genresList.map((item) => (
            <Button
              text={item}
              className="genres"
              fontWeight="medium"
              key={item}
            />
          ))}
        </FlexRowContainer>
      </FilterWrapper>

      <FilterWrapper>
        <Title fontSize="medium" title="Certification" />
      </FilterWrapper>

      <FilterWrapper>
        <Title title="Language" fontSize="medium">
          <Icon id="icon" color="grey" iconName="HiQuestion" />
        </Title>

        <SelectMenu options={languagesList} onChange={null} />
      </FilterWrapper>
    </FilterCard>
  );
}

export default FilterPanel;
