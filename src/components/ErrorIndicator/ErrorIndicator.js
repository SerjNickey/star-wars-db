import React from 'react';

import './ErrorIndicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator mt-4 mb-4">
      <img src={icon} alt="error icon" />
      <span className="boom">BOOM!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent droids to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;
