import React from 'react';
import Icon from 'components/Icon/icon';
import StyledSTrendingDiv from './trending-div.style';

/**
 * Trending div in search panel.
 *
 * @return {Element}
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

export default TrendingDiv;
