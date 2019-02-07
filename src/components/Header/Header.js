import React from 'react';

import './Header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header row d-flex justify-content-start">
      <div className="col-lg-auto">
        <h3><a href="#/">Star Wars DB</a></h3>
      </div>

      <nav className="col-lg-4 align-self-end">
        <ul className="d-flex justify-content-start">
          <li><a href="#">People</a></li>
          <li><a href="#">Planets</a></li>
          <li><a href="#">Starships</a></li>
        </ul>
      </nav>

      <button
        onClick={onServiceChange}
        className="btn btn-primary btn-small"
      >
        Change Service
      </button>
    </div>
  );
};

export default Header;
