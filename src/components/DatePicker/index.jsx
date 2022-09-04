import { React, useState } from 'react';
import PropTypes from 'prop-types';
import DatePickerPackage from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Icon from 'components/Icon';
import { StyledDatePicker, Label, IconWrapper } from './date-picker.style';

/**
 * Date picker input.
 *
 * @param {Object} props Component props.
 * @param {Date} props.initialDate Initial date displayed.
 * @param {string} props.label Label text.
 *
 * @return {Element} DatePicker component.
 */
function DatePicker({ initialDate, label }) {
  const [date, setDate] = useState(initialDate);
  const [showPicker, setShowPicker] = useState(false);

  /**
   * Set the new date.
   *
   * @param {Date} newDate Change state to this date.
   */
  const onChangeHandler = (newDate) => {
    setDate(newDate);
  };

  /**
   * Render date picker on click.
   */
  const iconOnClick = () => {
    setShowPicker((prevState) => !prevState);
  };

  return (
    <StyledDatePicker>
      <Label>{label}</Label>
      <div>
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
          onSelect={iconOnClick}
        />
        <IconWrapper onClick={iconOnClick}>
          <Icon color="black" iconName="calendar" />
        </IconWrapper>
      </div>
    </StyledDatePicker>
  );
}

DatePicker.propTypes = {
  initialDate: PropTypes.instanceOf(Date),
  label: PropTypes.string,
};

DatePicker.defaultProps = {
  initialDate: null,
  label: '',
};

export default DatePicker;
