import React from 'react';
import './Main.css';
import SWImage from './sw-image.jpg';

export default () => (
  <div className="wrapper">
    <img src={SWImage} alt="Star Wars" className="main img-fluid mx-auto d-block mb-4" />
  </div>
);
