import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram, FaGamepad, FaTools } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';
import './Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  console.log(isOpen)

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      
      <div className="header__name" onClick={() => navigate('/')}>Shubham Pal</div>
      <div className={`header__nav ${isOpen ? 'header__nav--open' : ''}`}>
          <span className="header__item" onClick={() => navigate('/')}>
            <FaHome />
            <span className="header__item-text">Home</span>
          </span>
          <span className="header__item" onClick={() => navigate('/about')}>
            <FaUser />
            <span className="header__item-text">About</span>
          </span>
          <span className="header__item" onClick={() => navigate('/projects')}>
            <FaProjectDiagram />
            <span className="header__item-text">Projects</span>
          </span>
          <span className="header__item" onClick={() => navigate('/games')}>
            <FaGamepad />
            <span className="header__item-text">Games</span>
          </span>
          <span className="header__item" onClick={() => navigate('/utilities')}>
            <FaTools />
            <span className="header__item-text">Utilities</span>
          </span>
      </div>
      <button className="header__hamburger" onClick={handleClick}>
        <GoThreeBars size={22} />
      </button>
    </header>
  );
};

export default Header;
