import React from 'react';

import Icon from 'Components/Icon/Icon';

import StyledSTrendingDiv from './TrendingDiv.Style';

/**
 *  Create trending div in search panel.
 * @return {JSX}  TrendingDiv component.
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
