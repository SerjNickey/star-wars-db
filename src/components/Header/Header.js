import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header row d-flex justify-content-start">
      <div className="col-lg-auto">
        <h3><Link to="/">Star Wars DB</Link></h3>
      </div>

      <nav className="col-lg-4 align-self-end">
        <ul className="d-flex justify-content-start">
          <li><Link to="/people/">People</Link></li>
          <li><Link to="/planets/">Planets</Link></li>
          <li><Link to="/starships/">Starships</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/secret">Secret</Link></li>
        </ul>
      </nav>      
    </div>
  );
};

export default Header;
