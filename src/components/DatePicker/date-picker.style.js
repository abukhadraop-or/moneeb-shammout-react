import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';

const StyledDatePicker = styled.div`
  width: 20rem;
  height: 3rem;
  outline: none;

  .popper {
    z-index: 1;
  }

  .datePicker {
    // input
    align-items: center;
    border-radius: 0.4rem;
    border: 0.1rem solid ${colors.gray}33;
    box-shadow: none;
    box-sizing: border-box;
    color: grey;
    display: flex;
    flex-flow: row nowrap;
    flex: 0 1 auto;
    height: 2rem;
    margin-left: 3.5rem;
    outline: 0;
    overflow: hidden;
    padding: 0.375rem 0.75rem;
    text-overflow: ellipsis;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    width: 15rem;

    &:focus,
    :active {
      border-color: ${colors.lightBlue};
    }

    ${media.desktop`
        width:8rem;
    `}
  }
  //TODO:margin minus
  .calender {
    margin-left: -1.5rem;

    //selecting all the calender days
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

const Label = styled.div`
  position: absolute;
  color: grey;
`;

const IconWrapper = styled.div`
  background-color: ${colors.lightGray};
  border-bottom-right-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  bottom: 2.1rem;
  font-size: 1.5rem;
  height: 1.8rem;
  left: 20rem;
  padding-top: 0.3rem;
  position: relative;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: 2rem;
  z-index: 0;

  & :first-child {
    align-content: center;
    justify-content: center;
  }

  ${media.desktop`
    left:12rem;
  `}
`;

export { StyledDatePicker, Label, IconWrapper };
