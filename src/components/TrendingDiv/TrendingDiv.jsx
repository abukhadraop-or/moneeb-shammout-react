import React from 'react';

import Icon from 'components/Icon/icon';

import StyledSTrendingDiv from './TrendingDiv.Style';

/**
 *  Create trending div in search panel.
 * @return {Element}  TrendingDiv component.
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
