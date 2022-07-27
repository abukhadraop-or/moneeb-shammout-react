import { styled, css } from 'reuse/Packages';

const wrapper = css`
  * {
    width: 92%;
  }
  .countryMenu {
    width: 80%;
    height: auto;
    padding-top: 2rem;
    display: block !important;
  }
`;
const StyledCountryDropDown = styled.div`
  @media (min-width: 25rem) {
    ${wrapper}
  }
`;
export default StyledCountryDropDown;
