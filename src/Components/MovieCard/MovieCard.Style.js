import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const DesktopDots = styled.div`
  ${media.phone`
    display: none;
  `}
  ${media.desktop`
    display: block;
    position: absolute;
    top: 5%;
    right: 0;
    width: 2rem;
  `}
`;
const DesktopPercentage = styled.div`
  ${media.phone`
    display: none;
  `}
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
    position: absolute;
    display: flex;
    flex-direction:row;

    bottom:-5%;
    left: 6%;
    background-color:black;
    font-size:1rem;
    color: white;
    width: 2rem;
    height: 1.8rem;
    align-content:center;
    font-weight: 700;
    padding: 0.2rem;
    
    *{
      display:inline;
    }
    .icon{
      font-size:0.7rem;
    }
  `}
`;
const MovieDropDownMenu = styled.div`
  display: none;

  ${media.desktop`
    position: relative;
    text-align:left !important;
    align-items:left !important;
    align-content:left !important;
    justify-content:left !important;
    justify-items:left !important;
    align-items:left !important;
    display:block;
    z-index:1;
    top: 50%;
    bottom:70%;
    left: 10%;
    font-size: 1rem;
    width: 2rem;
    .movieSignup{
      display:block;
      position:absolute;
      right:10%;
      margin-top:-1.2rem;
    }
 `}
`;
const OverFlowContainer = styled.div`
  ${media.phone`
    font-size: 0.8rem;
    font-weight:400;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 1rem; /* fallback */
    max-height: 2rem; /* fallback */
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
 `}

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
  ${media.phone`
    display: flex;
    height: 100%;
    width: 6rem;
    min-width: 6rem;
    border-color:transparent;
    ${phoneRoundedBorder};
    .poster{
      ${phoneRoundedBorder};
    }
    `}
  ${media.desktop`
    height: 80%;
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
  ${media.phone`
    display: flex;
    padding: 0rem 0rem 0rem 1rem ;
    align-items: flex-start;
    flex-direction: column;
    justify-content:space-evenly;
    width: 65%;
  `}

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
const ToolTip = styled.span`
  visibility: hidden;
  width: 10.5rem;
  background-color: ${colors.black};
  color: ${colors.white};
  text-align: center;
  padding: 0.4rem 0;
  border: 0.1rem solid white;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  left: 2.5%;
  top: 50%;
`;
const StyledMovieCard = styled.div`
  ${media.phone`
    height: 8rem;
    border-radius:0.8rem;
    width: 95%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction:row;
    border: 0.1rem solid #e3e3e3;
    box-shadow:0 0.1rem 0.5rem rgb(0 0 0 / 10%);
    margin-bottom: 1rem;
  `}

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
  ToolTip,
};
