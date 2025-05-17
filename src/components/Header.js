import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li id="home"><Link to="/">Home</Link></li>
          <li><Link to="/project">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li className="dropdown">
            <span>Contact</span>
            <ul className="dropdown-menu">
              <li><a href="mailto:krishdhshah@gmail.com">Email</a></li>
              <li><a href="https://www.linkedin.com/in/krish-shah-045680227/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/kri-shah" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
