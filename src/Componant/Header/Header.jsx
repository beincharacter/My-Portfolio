import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram, FaGamepad, FaTools } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';
import classNames from 'classnames';
import './Header.scss';

const HeaderItem = ({ icon, text, onClick }) => (
  <span className="header__item" onClick={onClick}>
    {icon}
    <span className="header__item-text">{text}</span>
  </span>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
    setIsOpen(!isOpen);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const headerNavClasses = classNames('header__nav', {
    'header__nav--open': isOpen,
  });

  return (
    <div className="header_box">
      <header className="header">
        <div className="header__name" onClick={() => navigate('/')}>
          Shubham Pal
        </div>
        <div className={headerNavClasses}>
          <HeaderItem icon={<FaHome />} text="Home" onClick={() => handleClick('/')} />
          <HeaderItem icon={<FaUser />} text="About" onClick={() => handleClick('/about')} />
          <HeaderItem icon={<FaProjectDiagram />} text="Projects" onClick={() => handleClick('/projects')} />
          <HeaderItem icon={<FaGamepad />} text="Games" onClick={() => handleClick('/games')} />
          <HeaderItem icon={<FaTools />} text="Utilities" onClick={() => handleClick('/utilities')} />
        </div>
        <button className="header__hamburger" onClick={handleOpen}>
          <GoThreeBars size={22} />
        </button>
      </header>
    </div>
  );
};

export default Header;
