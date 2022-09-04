import styled from 'styled-components';
import { media } from 'styles/media-query';
import colors from 'styles/colors';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Image from 'components/Image';
import Title from 'components/Title';

const MovieDropDownMenu = styled.div`
  display: none;

  ${media.desktop`
    display:block;
    font-size: 1rem;
    left: 1.5rem;
    position: relative;
    top: 14rem;
    width: 2rem;
    z-index:1;
 `}
`;

const LoginIcon = styled(Icon)`
  top: 1rem;
  position: absolute;
  left: 12rem;
`;

const SignupIcon = styled(Icon)`
  bottom: 0.7rem;
  position: absolute;
  left: 12rem;
`;

const DropButton = styled(Button)`
  display: inline;
  height: 3rem;
  justify-content: left;
  justify-items: left;
  text-align: left;
  text-indent: -0.2rem;
  width: 12rem;
`;

const StyledMovieCard = styled.div`
  border-radius: 0.8rem;
  border: 0.1rem solid ${colors.flashyWhite};
  box-shadow: 0 0.1rem 0.5rem ${colors.boxShadow};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 9rem;
  width: 100%;

  ${media.desktop`
    height: 25rem;
    padding-bottom:1.3rem;
    width: 11.5rem;

    :hover {
      cursor: pointer;
    }
  `}
`;

const BlurWrapper = styled.div`
  display: flex;

  ${media.desktop`
    display:block;

    ${({ blur }) => (blur ? `filter: blur(0.5rem);` : null)};

  `}
`;

const phoneRoundedBorder = `
  border-bottom-left-radius: 0.4rem;
  border-top-left-radius: 0.4rem;`;

const desktopRoundedBorder = `
  border-bottom-left-radius: 0%;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;`;

const PosterContainer = styled.div`
  display: flex;
  height: 100%;
  width: 6rem;
  min-width: 6rem;
  border-color: transparent;
  ${phoneRoundedBorder};

  ${media.desktop`
    height: 18rem;
    width: 11.5rem;

    ${desktopRoundedBorder}
      position: relative;
 `}
`;

const PosterImage = styled(Image)`
  ${phoneRoundedBorder};
  ${media.desktop`    
    width:100%;
    ${desktopRoundedBorder};
`}
`;

const DotsContainer = styled.div`
  display: none;

  ${media.desktop`
    display: block;
    position: absolute;
    right: 0;
    top: 0.5rem;
    width: 2rem;
  `}
`;

const PercentageContainer = styled.div`
  display: none;

  ${media.desktop`
    align-content:center;
    background-color:${colors.lightBlack};
    border-radius: 50%;
    border:solid 0.2rem;
    color: white;
    display: flex;
    flex-direction:row;
    font-size:1rem;
    font-weight: 700;
    height: 2.3rem;
    left: 0.7rem;
    padding: 0.2rem;
    padding-left:0.3rem;
    position: absolute;
    top:17rem;
    width: 2.5rem;

    ${({ percentage }) => {
      if (percentage >= 7) {
        return 'border-color: green green green transparent';
      }

      if (percentage >= 5) {
        return 'border-color: yellow yellow yellow transparent';
      }

      if (percentage <= 5) {
        return 'border-color: red transparent transparent transparent';
      }

      return null;
    }};

  `}
`;

const PercentageIcon = styled(Icon)`
  font-size: 0.7rem;
`;

const OverFlowContainer = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1rem;
  margin-right: 1rem;
  max-height: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;

  ${media.desktop`
    display: none;
  `}
`;

const RightContainer = styled.div`
  display: flex;
  padding: 0rem 0rem 0rem 1rem;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;

  ${media.desktop`
    line-height:1rem;
    white-space:discard;
    padding:2rem 1.2rem;
    width:10rem;    
  `}
`;

const MovieName = styled(Title)`
  cursor: pointer;

  :hover {
    color: ${colors.lightBlue};
  }

  ${media.desktop`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  font-weight:700;
  overflow:hidden;
  margin:0;
  margin-bottom:0.2rem;
`}
`;

const MovieDate = styled(Title)`
  opacity: 0.5;

  ${media.desktop`
  font-size: 1rem;
  font-weight:400;
  color: black;
  margin:0;
  padding:0;
`}
`;

export {
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
};
