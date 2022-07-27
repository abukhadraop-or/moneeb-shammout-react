import { React } from 'reuse/Packages';
import Icon from 'Components/Icon/Icon';
import StyledSTrendingDiv from './TrendingDiv.style';
/**
 * @description renders trending div in search panel
 * @returns {JSX}  trending div
 */
function TrendingDiv() {
  return (
    <StyledSTrendingDiv>
      <Icon iconName="HiOutlineTrendingUp" color="black" />
      &nbsp;
      <span>Trending</span>
    </StyledSTrendingDiv>
  );
}
// source sans pro 600

export default TrendingDiv;
