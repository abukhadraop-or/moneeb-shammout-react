import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

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
  position: absolute;
  z-index: 10;
  * {
    align-content: center;
    justify-content: center;
  }
  padding-top: 0.3rem;
  left: 85%;
  margin-top: -2rem;
  border-bottom-right-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
`;
const StyledDatePicker = styled.div`
  ${media.phone`
  width:20rem;
  height:3rem;
  display: block !important;
.wrapper{
}
        .popper{
          z-index:1;

        }
        .datePicker{
          // input
          margin: 0;
          padding: 0.375rem 0.75rem;
          width: 80%;
          margin-left:3.5rem;
          height: calc(1.5em + 0.75rem);
          border: 0;
          outline: 0;
          box-sizing: border-box;
          box-shadow: none;
          text-overflow: ellipsis;
          border:0.1rem solid rgba(0,0,0,0.2);
          border-radius:0.4rem;
          color:grey;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          flex: 0 1 auto;
          overflow: hidden;
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
          &:focus{
            border-color:${colors.lightBlue};
          }
        }
        .calender{
          padding:0;
        }
  /* width: 100%;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    -moz-padding-start: calc(0.75rem - 3px);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    appearance: none; */
 
    /* font-size: 1rem;
    width: 80%;
    height: 80%;
    border: none;
    outline: none;
    display: flex;
    color: grey;
    ::placeholder {
      color: grey;
    } */
  `}
`;
export { StyledDatePicker, Label, IconWrapper };
