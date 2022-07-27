import { React, PropTypes, useState } from 'reuse/Packages';
import Title from 'Components/Title/Title';
import Image from 'Components/Image/Image';
import Icon from 'Components/Icon/Icon';
// import DropDownMenu from 'Components/StringDropDown/StringDropDown'
import StlyedMovieCard from './MovieCard.Style';
import StyledPosterContainer from './PosterContainerStyle';
import StyledRightContainer from './rightContainer';
import StlyedOverFlowContainer from './overFlowContainerStyle';
import StyledDesktopDotsStyle from './DesktopDotsStyle';
import StyledDesktopPercentage from './DesktopPercentageStyle';
// import StyledMovieDropDownMEnu from './MovieDropDownStyle';
/**
 * @description return Movie Card
 * @param {string} title movie title
 * @param {string} date movie date
 * @param {string} description movie overview
 * @param {string} imageURL  movie image url
 * @param {number} percentageRate  movie vote rate
 * @returns {JSX}  Logo Container component
 */
function MovieCard({ title, description, date, imageURL, percentageRate }) {
  const [blur, setBlur] = useState(false);
  const iconClickHandler = () => {
    setBlur((prevState) => !prevState);
  };
  return (
    <StlyedMovieCard blur={blur}>
      <StyledPosterContainer>
        <StyledDesktopDotsStyle>
          <Icon
            iconName="Hidots"
            onClick={iconClickHandler}
            color="grey"
            hoverEffect
          />
        </StyledDesktopDotsStyle>
        {/* not working its blurs */}
        {/* <StyledMovieDropDownMEnu blur={blur}>
          <DropDownMenu visibility content={['aa','bb']} theme='smallBold' dropType='navDrops'/>
          
        </StyledMovieDropDownMEnu> */}
        <StyledDesktopPercentage>
          {`${percentageRate}%`}
        </StyledDesktopPercentage>
        <Image imagePath={imageURL} />
      </StyledPosterContainer>
      <StyledRightContainer>
        <Title title={title} theme="moviesBold" />
        <Title title={date} theme="smallLight" />
        <StlyedOverFlowContainer>{description}</StlyedOverFlowContainer>
      </StyledRightContainer>
    </StlyedMovieCard>
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
