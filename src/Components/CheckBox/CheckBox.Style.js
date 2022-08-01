import styled from 'styled-components';
// import {media} from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 2rem;
  cursor: pointer;
  font-size: 1.2rem;
  user-select: none;
  font-weight: ${(props) => (props.checked ? '600' : '300')};
`;

const StyledCheckBox = styled.span`
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  top: 0;
  left: 5%;
  background-color: #eee;
  ::after {
    // For displaying the check mark
    content: '';
    position: absolute;
    display: block;
    justify-content: center;
    left: 0.3rem;
    top: 0.1rem;
    width: 0.3rem;
    height: 0.6rem;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  ${(props) =>
    props.checked
      ? {
          'background-color': `${colors.lightBlue}`,
        }
      : {
          'background-color': `${colors.white}`,
          border: `solid 0.01rem ${colors.lightBlue}`,
          'border-radius': '30%',
        }};
`;

export { StyledCheckBox, Label };
