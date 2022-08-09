import styled from 'styled-components';
import colors from 'styles/colors';

const Label = styled.label`
  cursor: pointer;
  display: block;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.2rem;
  padding-left: 2rem;
  position: relative;
`;

const StyledCheckBox = styled.span`
  height: 1rem;
  left: 1.5rem;
  position: absolute;
  top: 0;
  width: 1rem;

  // For displaying the check mark
  ::after {
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    border: solid white;
    border-width: 0 0.2rem 0.2rem 0;
    transform: rotate(45deg);
    content: '';
    display: block;
    height: 0.3rem;
    justify-content: center;
    left: 0.3rem;
    position: absolute;
    top: 0.2rem;
    width: 0.1rem;
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
