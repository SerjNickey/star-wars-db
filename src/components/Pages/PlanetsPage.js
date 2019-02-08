import React from 'react';
import { withRouter } from 'react-router-dom';
import { PlanetDetails, PlanetList } from '../SWComponents';
import Row from '../Row';


const PlanetsPage = ({ history, match }) => {
  const { id } = match.params;

  return (
    <Row
      left={<PlanetList onItemSelected={(id) => history.push(id)} />}
      right={<PlanetDetails itemId={id} />}
    />
  );
}


export default withRouter(PlanetsPage);
