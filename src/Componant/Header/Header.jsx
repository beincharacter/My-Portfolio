import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaHome, FaUser, FaProjectDiagram, FaGamepad, FaTools } from 'react-icons/fa';
import './Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <button className="header__hamburger" onClick={handleClick}>
        <FaBars />
      </button>
      <div className="header__name">Shubham Pal</div>
      <nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`}>
        <ul className="header__list">
          <li className="header__item" onClick={() => navigate('/')}>
            <FaHome />
            <span className="header__item-text">Home</span>
          </li>
          <li className="header__item" onClick={() => navigate('/about')}>
            <FaUser />
            <span className="header__item-text">About</span>
          </li>
          <li className="header__item" onClick={() => navigate('/projects')}>
            <FaProjectDiagram />
            <span className="header__item-text">Projects</span>
          </li>
          <li className="header__item" onClick={() => navigate('/games')}>
            <FaGamepad />
            <span className="header__item-text">Games</span>
          </li>
          <li className="header__item" onClick={() => navigate('/utilities')}>
            <FaTools />
            <span className="header__item-text">Utilities</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
