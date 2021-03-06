import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ left, right }) => (
  <div className="row mb-4">
    <div className="col-md-4">
      {left}
    </div>
    <div className="col-md-8">
      {right}
    </div>
  </div>
);

Row.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node
};

export default Row;
