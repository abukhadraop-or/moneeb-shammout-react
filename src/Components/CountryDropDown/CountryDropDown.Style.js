import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const StyledCountryDropDown = styled.div`
  ${media.phone`
  display: block !important;
  
    .countryButton{
      padding-right:1rem;
      background-color:#e4e7eb;
    }
    .countryMenu{
      box-sizing:border-box;
    }
    width: 90%;
    height: auto;
    padding-top: 1rem;
    margin-left:1rem;

  `}
`;

export default StyledCountryDropDown;
