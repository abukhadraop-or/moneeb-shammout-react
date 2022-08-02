import React from 'react';
import ReactSlider from 'react-slider';
import PropTypes from 'prop-types';

// import PropTypes from 'prop-types';

import StyledSlider from './Slider.Style';

/**
 *  return Slider component
 * @param {object} props Component variables.
 * @param {number} props.index Current index the slider is standing at.
 * @param {function} props.onChange Handles slider changes.
 * @param {number} props.tag Slider tag for each one.
 * @return {JSX}  Slider component.
 */

function Slider({ onChange, index, tag }) {
  return (
    <StyledSlider>
      <ReactSlider
        className="slider"
        markClassName="mark"
        onChange={onChange}
        trackClassName="track"
        defaultValue={0}
        value={index}
        min={0}
        max={4}
        marks
        renderMark={(props) => {
          if (tag < index) {
            props.className = 'mark mark-completed';
          } else if (tag === index) {
            props.className = 'mark mark-active';
          }
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <span {...props} />;
        }}
        orientation="horizontal"
      />
    </StyledSlider>
  );
}

Slider.propTypes = {
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  tag: PropTypes.number.isRequired,
};

export default Slider;
