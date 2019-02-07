import React from 'react';
import ItemDetails, { Record } from '../ItemDetails';
import { WithSwapiService } from '../HocHelpers';

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props} >
      <Record field="model" label="Model: " />
      <Record field="manufacturer" label="Manufacturer: " />
      <Record field="length" label="Length: " />
      <Record field="crew" label="Crew: " />
      <Record field="cargoCapacity" label="Cargo capacity: " />
      <Record field="passengers" label="Passengers: " />
      <Record field="costInCredits" label="Cost: " />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  };
};

export default WithSwapiService(mapMethodsToProps)(StarshipDetails);
