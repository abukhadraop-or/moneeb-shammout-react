import styled, { css } from 'styled-components';
import { media } from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const bigWhite = css`
  font-size: 1.3rem;
  font-weight: 600;
  width: 9rem;
  height: 2.5rem;
`;
const bigWhiteFooter = css`
  ${bigWhite};
  font-weight: 700;
  font-size: 1.2rem;
`;
const bigWhiteBlue = css`
  font-size: 1.2rem;
  font-weight: 700;
  width: 14rem;
  height: 2.8rem;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 3rem 0;
  border-radius: 0.2rem;
  color: ${colors.boldBlue};
  background-color: white;
  ${media.desktop`
    margin-left:-4rem;
    margin-top:.2rem;
  color: ${colors.lightBlue};

    `}
`;
const smallFade = css`
  ${bigWhite}
  font-size: 1rem;
  opacity: 0.55;
  padding-left: 0.5rem;
  padding-bottom: 0.7rem;
`;
const smallWhite = css`
  font-size: 1rem;
  font-weight: 400;
  padding-left: 0.5rem;
  padding-bottom: 0.7rem;
`;
const footerDrops = css`
  ${smallWhite}
  font-size:1.1rem;
  padding-bottom: 0rem;
`;
const smallDesktopWhite = css`
  ${smallWhite};
  font-weight: 600;
`;
const smallBlack = css`
  ${smallWhite};
  color: black;
`;
const navDrops = css`
  ${smallBlack};
  width: 100%;
  cursor: pointer;
  text-indent: 1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;
const smallDarkGrey = css`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
  width: 100%;
  height: 3rem;
  width: 12rem;
  text-indent: -6rem;
  display: block !important;
`;
const movieDropDown = css`
  ${smallDarkGrey};
  display: inline;
  text-indent: -0.2rem;
  text-align: left !important;
  align-items: left !important;
  align-content: left !important;
  justify-content: left !important;
  justify-items: left !important;
  align-items: left !important;
`;
const bigBlue = css`
  font-size: 1.2rem;
  background-color: ${(props) =>
    props.disabled ? `rgba(0,0,0,0.1)` : colors.lightBlue};
  color: ${(props) => (props.disabled ? `rgba(0,0,0,0.5)` : colors.white)};
  width: 95%;
  height: 2.8rem;
  justify-content: center;
  align-items: center;
  border: solid 1rem;
  border-color: transparent;
  border-radius: 3rem;
  margin: 1rem 0rem 3rem 0rem;
  cursor: pointer;
  font-weight: 600;
  /* ${media.desktop`
  width:95%;
  
  
  `} */
`;
const loadMore = css`
  ${bigBlue};

  border-radius: 0.5rem;
  height: 3.2rem;
  font-size: 1.5rem;
  margin: -2rem 0rem 1rem 0rem;
  ${media.desktop`
  margin: 1rem 0rem 1rem 2.5rem;
  width:81%;
  &:hover{
    color:black;
  }
  `}
`;
const language = css`
  border: 0.1rem solid;
  border-color: white;
  font-weight: 600;
  line-height: 1rem;
  padding-top: 0.25rem;
  border-radius: 0.2rem;
  height: 1.7rem;
  :hover {
    color: ${colors.darkBlue};
    background-color: white;
  }
`;
const themes = {
  bigBlue,
  bigWhite,
  bigWhiteBlue,
  bigWhiteFooter,
  footerDrops,
  language,
  loadMore,
  movieDropDown,
  navDrops,
  smallBlack,
  smallDarkGrey,
  smallDesktopWhite,
  smallFade,
  smallWhite,
};
const StyledButton = styled.button`
  ${media.phone`
    display: flex;
    background-color: transparent;
    color: ${colors.white};
    border: none;
    ${(props) => themes[props.theme]}
  `}
`;

export default StyledButton;
