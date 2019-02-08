import React from 'react';
import { StarshipDetails, StarshipList } from '../SWComponents';
import { withRouter } from 'react-router-dom';
import Row from '../Row';


const StarshipPage = ({ history, match }) => {
  const { id } = match.params;

  return (
    <Row
      left={<StarshipList onItemSelected={(id) => history.push(id)} />}
      right={<StarshipDetails itemId={id} />}
    />
  );
}


export default withRouter(StarshipPage);
