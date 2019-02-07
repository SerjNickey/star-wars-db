import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header row d-flex justify-content-start">
      <div className="col-lg-auto">
        <h3><Link to="/">Star Wars DB</Link></h3>
      </div>

      <nav className="col-lg-4 align-self-end">
        <ul className="d-flex justify-content-start">
          <li><NavLink to="/people/">People</NavLink></li>
          <li><NavLink to="/planets/">Planets</NavLink></li>
          <li><NavLink to="/starships/">Starships</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/secret">Secret</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
