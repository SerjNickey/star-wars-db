import React from 'react';

export default ({ left, right }) => (
  <div className="row mb-4">
    <div className="col-md-6">
      {left}
    </div>
    <div className="col-md-6">
      {right}
    </div>
  </div>
);
