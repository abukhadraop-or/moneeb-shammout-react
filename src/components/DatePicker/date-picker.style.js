import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';

// TODO:fix style
const Label = styled.div`
  position: absolute;
  color: grey;
`;

const IconWrapper = styled.div`
  background-color: #e4e7eb;
  width: 2rem;
  height: 1.8rem;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  position: relative;
  z-index: 0;
  * {
    align-content: center;
    justify-content: center;
  }

  padding-top: 0.3rem;
  left: 100%;
  margin-top: -2rem;
  border-bottom-right-radius: 0.4rem;
  border-top-right-radius: 0.4rem;

  ${media.desktop`
    left:110%;
  `}
`;
const StyledDatePicker = styled.div`
  width: 20rem;
  height: 3rem;
  outline: none;

  .popper {
    z-index: 1;
  }

  .datePicker {
    // input
    margin: 0;
    padding: 0.375rem 0.75rem;
    width: 80%;
    margin-left: 3.5rem;
    height: calc(1.5em + 0.75rem);
    border: 0;
    outline: 0;
    box-sizing: border-box;
    box-shadow: none;
    text-overflow: ellipsis;
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
    border-radius: 0.4rem;
    color: grey;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    flex: 0 1 auto;
    overflow: hidden;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:focus {
      border-color: ${colors.lightBlue};
    }
  }

  .calender {
    margin-left: -1.5rem;
    * {
      padding-right: 0.5rem;

      :focus {
        background-color: ${colors.lightBlue};
      }
    }
  }

  ${media.desktop`
    width:12rem;
    `}
`;
export { StyledDatePicker, Label, IconWrapper };
