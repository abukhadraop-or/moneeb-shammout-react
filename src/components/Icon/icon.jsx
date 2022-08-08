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
import { IoMdCalendar } from 'react-icons/io';
import StyledIcon from './icon.Style';

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
  calendar: <IoMdCalendar />,
  percent: <CgMathPercent />,
};

/**
 * Icon component.
 *
 * @param {Object} props   Component props.
 * @param {string} props.className Class name for css.
 * @param {string} props.color Name of icon color.
 * @param {boolean} props.hoverEffect  Gives icon hover effect.
 * @param {string} props.iconName   Name of the icon.
 * @param {String} props.id  Unique identifier.
 * @param {Function} props.onClick  Click handler.
 *
 * @return {Element}
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
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'black',
    'blue',
    'grey',
    'white',
    'lightGrey',
    'transparent',
    'none',
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
