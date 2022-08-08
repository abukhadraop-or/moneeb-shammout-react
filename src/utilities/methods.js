/**
 * Converts date from YYYY-MM-DD to mm-dd-YYYY.
 *
 * @param {string} dateString  Date to be converted.
 *
 * @return {string} New formatted date.
 */
const convertDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleString([], {
    month: 'short',
  });
  const day = date.getDay();
  const newDay = day < 10 ? `0${day}` : day;
  return `${month} ${newDay}, ${date.getFullYear()}`;
};

export default convertDate;
