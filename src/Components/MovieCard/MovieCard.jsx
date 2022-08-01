import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Title from 'Components/Title/Title';
import Image from 'Components/Image/Image';
import Icon from 'Components/Icon/Icon';
import Button from 'Components/Button/Button';
import ActionDropDown from 'Components/ActionDropDown/ActionDropDown';

import {
  DesktopDots,
  DesktopPercentage,
  OverFlowContainer,
  PosterContainer,
  RightContainer,
  StyledMovieCard,
  MovieDropDownMenu,
  ToolTip,
} from './MovieCard.Style';

/**
 *  Create Movie Card.
 * @param {object} props  Component variables.
 * @param {string} props.date movie date.
 * @param {string} props.description movie overview.
 * @param {string} props.imageURL  movie image url.
 * @param {number} props.percentageRate  movie vote rate.
 * @param {string} props.title movie title.
 * @return {JSX}  Logo Container component.
 */

function MovieCard({ title, description, date, imageURL, percentageRate }) {
  const [blur, setBlur] = useState(false);
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
          <ToolTip className="toolTip">{title}</ToolTip>
          <DesktopDots>
            <Icon
              iconName="Hidots"
              onClick={iconClickHandler}
              color="transparent"
              hoverEffect
            />
          </DesktopDots>
          {/* not working its blurs */}

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
