import styled from 'styled-components';

const StyledSlider = styled.div`
  width: 100%;
  height: 5rem;

  .slider {
    width: 100%;
    height: 2rem;
  }

  .mark {
    width: 8px;
    height: 8px;
    border: 2px solid rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    border-radius: 50%;
    vertical-align: middle;
    margin: 0px calc(19px);
    bottom: calc(50% - 6px);
  }
  .mark.mark-active {
    border: 2px solid #00d4ff;
    background-color: rgb(255, 255, 255);
  }
  .mark.mark-completed {
    border: 2px solid rgb(255, 255, 255);
    background-color: #00d4ff;
  }
  .track {
    position: relative;
    background: #ddd;
  }
  .track.track-0 {
    background: #00d4ff;
  }
`;

export default StyledSlider;
