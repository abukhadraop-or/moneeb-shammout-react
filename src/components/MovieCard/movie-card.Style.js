import styled from 'styled-components';
import { media } from 'styles/media-query';

const DesktopDots = styled.div`
  display: none;

  ${media.desktop`
    display: block;
    position: absolute;
    right: 0;
    top: 0.5rem;
    width: 2rem;
  `}
`;

const DesktopPercentage = styled.div`
  display: none;

  ${media.desktop`
  border-radius: 50%;
  border:solid 0.2rem;

  ${(props) =>
    props.percentage <= 5
      ? {
          'border-color': 'red black black black',
        }
      : null};

${(props) =>
  props.percentage > 5
    ? {
        'border-color': 'yellow yellow yellow black',
      }
    : null};

${(props) =>
  props.percentage >= 7
    ? {
        'border-color': 'green green green black',
      }
    : null};

    align-content:center;
    background-color:black;
    bottom:-1rem;
    color: white;
    display: flex;
    flex-direction:row;
    font-size:1rem;
    font-weight: 700;
    height: 1.8rem;
    left: 0.7rem;
    padding: 0.2rem;
    position: absolute;
    width: 2rem;
    
    .icon{
      font-size:0.7rem;
    }

  `}
`;

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

    .movieSignup{
      display:block;
      margin-top:-1.2rem;
      position:absolute;
      right:1rem;
    }

 `}
`;

const OverFlowContainer = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* number of lines to show */
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
const phoneRoundedBorder = {
  'border-bottom-left-radius': '0.4rem',
  'border-top-left-radius': '0.4rem',
};
const desktopRoundedBorder = {
  'border-bottom-left-radius': '0%',
  'border-top-left-radius': '0.5rem',
  'border-top-right-radius': '0.5rem',
};
const PosterContainer = styled.div`
  display: flex;
  height: 100%;
  width: 6rem;
  min-width: 6rem;
  border-color: transparent;

  ${phoneRoundedBorder};

  .poster {
    ${phoneRoundedBorder};
  }

  ${media.desktop`
    height: 18rem;
    width: 11.5rem;

    .poster{
      width:100%;
    ${desktopRoundedBorder};
    }

    ${desktopRoundedBorder}
    position: relative;
 `}
`;

const RightContainer = styled.div`
  display: flex;
  padding: 0rem 0rem 0rem 1rem;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;

  ${media.desktop`
    display:flex;
    flex-flow:row;
    flex-wrap:wrap;
    align-items:flex-start;
    justify-content:left;
    line-height:1rem;
    height:1rem;
    padding:0;
    padding-left:1rem;
    width:10rem;
  `}
`;

const StyledMovieCard = styled.div`
  height: 9rem;
  border-radius: 0.8rem;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  border: 0.1rem solid #e3e3e3;
  box-shadow: 0 0.1rem 0.5rem rgb(0 0 0 / 10%);
  margin-bottom: 1rem;

  ${media.desktop`
    flex-wrap: wrap;
    padding-bottom:1.3rem;
    margin: 1rem 0rem 1rem 2rem;
    height: 22.5rem;
    width: 11.5rem;

    :hover {
      cursor: pointer;
    }

    &:hover .toolTip{
      visibility: visible;
    }
    
    ${(props) =>
      props.blur
        ? {
            '-webkit-filter': `blur(0.7rem)`,
            filter: `blur(0.7rem)`,
          }
        : null};
  `}
`;
export {
  StyledMovieCard,
  RightContainer,
  PosterContainer,
  MovieDropDownMenu,
  DesktopPercentage,
  DesktopDots,
  OverFlowContainer,
};
