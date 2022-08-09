import React from 'react';
import ReactSlider from 'react-slider';
import PropTypes from 'prop-types';
import StyledSlider from './slider.style';

/**
 * Slider component.
 *
 * @param {Object} props Component props.
 * @param {number} props.index Current index the slider is standing at.
 * @param {Function} props.onChange Handles slider changes.
 * @param {number} props.tag Slider tag for each one.
 *
 * @return {Element}  Slider component.
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
