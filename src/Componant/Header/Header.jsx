import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
        <div className="name">Shubham</div>
        <nav className="nav_bar">
            <ul>
                <li onClick={() => navigate('/')}>Home</li>
                <li onClick={() => navigate('/about')}>About</li>
                <li onClick={() => navigate('/projects')}>Projects</li>
                <li onClick={() => navigate('/games')}>Games</li>
                <li onClick={() => navigate('/utilities')}>Utlities</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header