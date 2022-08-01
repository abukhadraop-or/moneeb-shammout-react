import React from 'react';
import PropTypes from 'prop-types';

import {
  HiDotsCircleHorizontal,
  HiUser,
  HiChevronDown,
  HiChevronRight,
  HiOutlineMenu,
  HiOutlineTrendingUp,
  HiQuestionMarkCircle,
  HiSearch,
} from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { CgMathPercent } from 'react-icons/cg';
import { BiPlusMedical } from 'react-icons/bi';
// import { TiChevronRight } from 'react-icons/ti';

import StyledIcon from './Icon.Style';

const icons = {
  AiOutlineClose: <AiOutlineClose />,
  BiPlus: <BiPlusMedical />,
  HiChevronDown: <HiChevronDown />,
  HiChevronRight: <HiChevronRight />,
  HiOutlineMenu: <HiOutlineMenu />,
  HiOutlineTrendingUp: <HiOutlineTrendingUp />,
  HiQuestion: <HiQuestionMarkCircle />,
  HiSearch: <HiSearch />,
  HiUser: <HiUser />,
  Hidots: <HiDotsCircleHorizontal />,
  percent: <CgMathPercent />,
};

/**
 *  Create Icon component.
 * @param {object} props   Component variables.
 * @param {string} props.className Class name for css.
 * @param {string} props.color Name of icon color.
 * @param {Boolean} props.hoverEffect  Gives icon hover effect.
 * @param {string} props.iconName   name of the icon.
 * @param {String} props.id  unique identifier.
 * @param {Function} props.onClick on click handler.
 * @return {JSX}  Icon.
 */

function Icon({ className, color, hoverEffect, iconName, id, onClick }) {
  return (
    <StyledIcon
      theme={color}
      onClick={onClick}
      id={id}
      hoverEffect={hoverEffect}
      className={className}
    >
      {icons[iconName]}
    </StyledIcon>
  );
}

Icon.propTypes = {
  // iconFamily: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'black',
    'blue',
    'grey',
    'white',
    'lightGrey',
    'transparent',
  ]),
  hoverEffect: PropTypes.bool,
  iconName: PropTypes.string.isRequired,
  id: PropTypes.string,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  className: '',
  color: 'white',
  hoverEffect: false,
  id: '',
  onClick: null,
};

export default Icon;
