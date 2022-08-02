import { React, useState } from 'react';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import DatePickerPackage from 'react-datepicker';
import Icon from 'Components/Icon/Icon';

import { StyledDatePicker, Label, IconWrapper } from './DatePicker.Style';

/**
 * Creates a DatePicker input.
 * @param {object} props Component variables.
 * @param {date} props.initialDate Initial date displayed.
 * @param {string} props.label Label text.
 * @return {JSX}  DatePicker component.
 */

function DatePicker({ initialDate, label }) {
  const [date, setDate] = useState(initialDate);
  const [showPicker, setShowPicker] = useState(false);
  const onChangeHandler = (newDate) => {
    setDate(newDate);
  };
  const iconOnClick = () => {
    setShowPicker((prevState) => !prevState);
  };
  return (
    <StyledDatePicker>
      <Label>{label}</Label>
      <DatePickerPackage
        selected={date}
        onChange={(newDate) => onChangeHandler(newDate)}
        dateFormat="M/dd/yyyy"
        showFourColumnMonthYearPicker
        wrapperClassName="wrapper"
        popperClassName="popper"
        className="datePicker"
        calendarClassName="calender"
        name="datePicker"
        open={showPicker}
        onCalendarClose={iconOnClick}
        onClickOutside={iconOnClick}
      />
      <IconWrapper onClick={iconOnClick}>
        <Icon color="black" iconName="calendar" />
      </IconWrapper>
    </StyledDatePicker>
  );
}

DatePicker.propTypes = {
  initialDate: PropTypes.objectOf(PropTypes.Date),
  label: PropTypes.string,
};
DatePicker.defaultProps = {
  initialDate: null,
  label: '',
};

export default DatePicker;
