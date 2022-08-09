import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Title/title';
import Image from 'components/Image/image';
import Icon from 'components/Icon/icon';
import Button from 'components/Button/button';
import ActionDropDown from 'components/ActionDropDown/action-drop-down';
import ToolTip from 'components/ToolTip/tool-tip';
import {
  DesktopDots,
  DesktopPercentage,
  OverFlowContainer,
  PosterContainer,
  RightContainer,
  StyledMovieCard,
  MovieDropDownMenu,
} from './movie-card.Style';

/**
 * Movie Card.
 *
 * @param {Object} props  Component props.
 * @param {string} props.date Movie date.
 * @param {string} props.description Movie overview.
 * @param {string} props.imageURL  Movie image url.
 * @param {number} props.percentageRate  Movie vote rate.
 * @param {string} props.title Movie title.
 *
 * @return {Element}
 */
function MovieCard({ date, description, imageURL, percentageRate, title }) {
  const [blur, setBlur] = useState(false);

  /**
   * Blur background when clicking icon in top-right corner.
   */
  const iconClickHandler = () => {
    setBlur((prevState) => !prevState);
  };

  return (
    <div>
      <MovieDropDownMenu blur={blur}>
        {blur && (
          <ActionDropDown>
            <Button text="Login" theme="movieDropDown">
              <Icon
                iconName="HiChevronRight"
                color="black"
                className="movieSignup"
              />
            </Button>
            <Button text="Signup and join community" theme="movieDropDown">
              <Icon
                iconName="HiChevronRight"
                color="black"
                className="movieSignup"
              />
            </Button>
          </ActionDropDown>
        )}
      </MovieDropDownMenu>
      <StyledMovieCard blur={blur}>
        <PosterContainer>
          <ToolTip className="toolTip" theme="movies" text={title} />
          <DesktopDots>
            <Icon
              iconName="Hidots"
              onClick={iconClickHandler}
              color="transparent"
              hoverEffect
            />
          </DesktopDots>

          <DesktopPercentage percentage={percentageRate}>
            &nbsp;{`${percentageRate * 10}`}
            <Icon iconName="percent" color="white" className="icon" />
          </DesktopPercentage>
          <Image imagePath={imageURL} className="poster" />
        </PosterContainer>
        <RightContainer>
          <div>
            <Title title={title} theme="moviesBold" />
            <Title title={date} theme="moviesLight" />
          </div>
          <OverFlowContainer>{description}</OverFlowContainer>
        </RightContainer>
      </StyledMovieCard>
    </div>
  );
}

MovieCard.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  percentageRate: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieCard;
