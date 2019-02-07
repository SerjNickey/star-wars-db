import React from 'react';
import { StarshipDetails, StarshipList } from '../SWComponents';
import { withRouter } from 'react-router-dom';

const StarshipPage = ({ history }) => (
  <StarshipList
    onItemSelected={(id) => history.push(`/starships/${id}`)} />
);

export default withRouter(StarshipPage);
