import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import Title from 'Components/Title/Title';
import FilterCard from 'Components/FilterCard/FilterCard';
import Icon from 'Components/Icon/Icon';
import RadioButton from 'Components/RadioButton/RadioButton';
import CheckBox from 'Components/CheckBox/CheckBox';
import CountryDropDown from 'Components/CountryDropDown/CountryDropDown';
import ToolTip from 'Components/ToolTip/ToolTip';
import DatePicker from 'Components/DatePicker/DatePicker';
import Button from 'Components/Button/Button';
import SelectMenu from 'Components/SelectMenu/SelectMenu';
import Slider from 'Components/Slider/Slider';

import {
  availabilitiesList,
  filtersList,
  releaseList,
  genresList,
  languagesList,
} from 'Constants/Content';
// import SelectMenu from 'Components/SelectMenu/SelectMenu';
import {
  FilterWrapper,
  FlexRowContainer,
  ToolTipWrapper,
} from './BodyFilter.Style';
/**
 * Create Body Filter part.
 * @return {JSX}  BodyFilter component.
 */

function BodyFilter() {
  const [showInfo, setShowInfo] = useState(false);
  const [radioBtnState, setRadioBtnState] = useState({
    [filtersList[0]]: false,
    [filtersList[1]]: false,
    [filtersList[2]]: false,
  });
  const [showAvailability, setShowAvailability] = useState(false);
  const [showReleaseDates, setShowReleaseDates] = useState(false);
  const [showCountryDrop, setShowCountryDrop] = useState(false);
  const [languageInfo, setLanguageInfo] = useState(false);

  /**
   * Show or hide question mark info on click.
   * @param {object}  event Event object.
   */

  const infoIconClickHandler = (event) => {
    if (event.currentTarget.id === 'icon') {
      event.stopPropagation();
      setShowInfo((prevState) => !prevState);
    } else {
      setShowInfo(false);
    }
  };

  /**
   * Check or uncheck radio button.
   * @param {String}  id Radio button identifier.
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
   *  Show or hide availabilities checkboxes.
   */

  const toggleAvailability = () => {
    setShowAvailability((prevState) => !prevState);
  };

  /**
   *  Show or hide Release checkboxes.
   */

  const toggleReleaseDates = () => {
    setShowReleaseDates((prevState) => !prevState);
    setShowCountryDrop(() => false);
  };

  /**
   *  Show or hide country drop down.
   * @param {boolean} show Show or hide country drop.
   */

  const toggleCountryDrop = (show) => {
    setShowCountryDrop(() => show);
  };

  /**
   *  Show or hide language pop up.
   * @param {object}  event Event object.
   */

  const showLanguageInf = (event) => {
    if (event.currentTarget.id === 'icon') {
      event.stopPropagation();
      setLanguageInfo((prevState) => !prevState);
    } else {
      setLanguageInfo(false);
    }
  };

  return (
    <FilterCard
      title="Filters"
      onClick={(event) => {
        infoIconClickHandler(event);
        showLanguageInf(event);
      }}
    >
      {showInfo && (
        <ToolTip
          className="toolTip"
          theme="filters"
          text="Log In To Filter Items You've Watched"
        />
      )}

      <Title title="Show Me" theme="light">
        <Icon
          id="icon"
          color="grey"
          iconName="HiQuestion"
          onClick={(event) => infoIconClickHandler(event)}
        />
      </Title>

      <br />
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

      <Title title="Availabilities" theme="light" />
      <br />
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
      <Title title="Release Dates" theme="light" />
      <br />
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
        <Title theme="light" title="Genres" />
        <FlexRowContainer>
          {genresList.map((item) => (
            <Button text={item} theme="whiteRounded" key={item} />
          ))}
        </FlexRowContainer>
      </FilterWrapper>

      <FilterWrapper>
        <Title theme="light" title="Certification" />
      </FilterWrapper>

      <FilterWrapper>
        {languageInfo && (
          <ToolTipWrapper>
            <ToolTip
              className=""
              theme="filters"
              text="Filter items based on their original language"
            />
          </ToolTipWrapper>
        )}
        <Title title="Language" theme="light">
          <Icon
            id="icon"
            color="grey"
            iconName="HiQuestion"
            onClick={showLanguageInf}
          />
        </Title>
        <br />
        <SelectMenu optionsList={languagesList} onChange={null} />
      </FilterWrapper>
      <FilterWrapper>
        <Slider className="slider" onChange={() => {}} index={4} tag={4} />
      </FilterWrapper>
    </FilterCard>
  );
}

// BodyFilter.propTypes = {
//   onSort: PropTypes.func.isRequired,
// };

export default BodyFilter;
