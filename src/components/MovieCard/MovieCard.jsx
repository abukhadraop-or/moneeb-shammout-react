import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Title/Title';
import Image from 'components/Image/Image';
import Icon from 'components/Icon/Icon';
import Button from 'components/Button/Button';
import ActionDropDown from 'components/ActionDropDown/ActionDropDown';
import ToolTip from 'components/ToolTip/ToolTip';
import {
  DotsContainer,
  PercentageContainer,
  OverFlowContainer,
  PosterContainer,
  RightContainer,
  StyledMovieCard,
  MovieDropDownMenu,
  BlurWrapper,
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
            <Button
              text="Login"
              fontWeight="medium-high"
              color="fontGrey"
              className="movieDrop"
            >
              <Icon
                iconName="HiChevronRight"
                color="black"
                className="movieSignup"
              />
            </Button>
            <Button
              text="Signup and join community"
              fontWeight="medium-high"
              color="fontGrey"
              className="movieDrop"
            >
              <Icon
                iconName="HiChevronRight"
                color="black"
                className="movieSignup"
              />
            </Button>
          </ActionDropDown>
        )}
      </MovieDropDownMenu>
      <StyledMovieCard>
        <BlurWrapper blur={blur}>
          <PosterContainer>
            <ToolTip className="toolTip" theme="movies" text={title} />
            <DotsContainer>
              <Icon
                iconName="Hidots"
                onClick={iconClickHandler}
                color="transparent"
                hoverEffect
              />
            </DotsContainer>

            <PercentageContainer percentage={percentageRate}>
              &nbsp;{`${percentageRate * 10}`}
              <Icon iconName="percent" color="white" className="icon" />
            </PercentageContainer>
            <Image imagePath={imageURL} className="poster" />
          </PosterContainer>
          <RightContainer>
            <div>
              <Title
                title={title}
                fontSize="medium"
                fontWeight="medium-high"
                className="movieName"
              />
              <Title title={date} fontWeight="medium" className="movieDate" />
            </div>
            <OverFlowContainer>{description}</OverFlowContainer>
          </RightContainer>
        </BlurWrapper>
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
