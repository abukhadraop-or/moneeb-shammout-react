import styled from 'styled-components';
import colors from 'styles/colors';

const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 2rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.2rem;
`;
// TODO:remove percent
const StyledCheckBox = styled.span`
  width: 1rem;
  height: 1rem;
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
    top: 0.2rem;
    width: 0.1rem;
    height: 0.3rem;
    border: solid white;
    border-width: 0 0.2rem 0.2rem 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  ${(props) =>
    props.checked
      ? {
          'background-color': `${colors.lightBlue}`,
          'border-radius': '0.3rem',
        }
      : {
          'background-color': `${colors.white}`,
          border: `solid 0.001rem ${colors.lightBlue}`,
          'border-radius': '30%',
        }};
`;

export { StyledCheckBox, Label };
