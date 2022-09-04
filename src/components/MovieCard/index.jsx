import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import ActionDropDown from 'components/ActionDropDown';
import ToolTip from 'components/ToolTip';
import {
  BlurWrapper,
  DotsContainer,
  DropButton,
  LoginIcon,
  MovieDate,
  MovieDropDownMenu,
  MovieName,
  OverFlowContainer,
  PercentageContainer,
  PercentageIcon,
  PosterContainer,
  PosterImage,
  RightContainer,
  SignupIcon,
  StyledMovieCard,
} from './movie-card.style';

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
  const [showTip, setShowTip] = useState(false);

  /**
   * Blur background when clicking icon in top-right corner.
   */
  const iconClickHandler = () => {
    setBlur((prevState) => !prevState);
  };

  /**
   * Toggles movie tool tip.
   */
  const toggleToolTip = () => {
    setShowTip((prevState) => !prevState);
  };

  /**
   * Undo blur if it loses focus.
   */
  const onCardLoseFocus = () => {
    if (blur) {
      setBlur(false);
    }
  };

  useEffect(() =>
    document.addEventListener('mousedown', () => {
      onCardLoseFocus();
    })
  );
  return (
    <div>
      <MovieDropDownMenu blur={blur}>
        {blur && (
          <ActionDropDown>
            <DropButton text="Login" fontWeight="medium-high" color="fontGrey">
              <LoginIcon iconName="HiChevronRight" color="black" />
            </DropButton>
            <DropButton
              text="Signup and join community"
              fontWeight="medium-high"
              color="fontGrey"
            >
              <SignupIcon iconName="HiChevronRight" color="black" />
            </DropButton>
          </ActionDropDown>
        )}
      </MovieDropDownMenu>
      <StyledMovieCard
        onMouseOver={toggleToolTip}
        onMouseOut={toggleToolTip}
        onfocusout={onCardLoseFocus}
      >
        <BlurWrapper blur={blur}>
          <PosterContainer>
            {showTip && <ToolTip theme="movies" text={title} />}
            <DotsContainer>
              <Icon
                iconName="Hidots"
                onClick={iconClickHandler}
                color="transparent"
                hoverEffect
              />
            </DotsContainer>

            <PercentageContainer percentage={percentageRate}>
              {`${percentageRate * 10}`}
              <PercentageIcon iconName="percent" color="white" />
            </PercentageContainer>
            <PosterImage imagePath={imageURL} />
          </PosterContainer>
          <RightContainer>
            <div>
              <MovieName
                title={title}
                fontSize="medium"
                fontWeight="medium-high"
              />
              <MovieDate title={date} fontWeight="medium" />
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
