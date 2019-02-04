import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';
import ErrorIndicator from '../ErrorIndicator';
import ErrorButton from '../ErrorButton';
import './App.css';

import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';

import SwapiService from '../../services/SwapiService';


export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  };

  render() {
    if(this.state.hasError) return <ErrorIndicator />;

    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

    return (
      <div className="stardb-app container">
        <Header />
        { planet }

        <div className="row ">
          <div className="col-12 d-flex justify-content-start">
            <button
              className="toggle-planet btn btn-warning btn-lg mr-4"
              onClick={this.toggleRandomPlanet}
            >
              Toggle Random Planet
            </button>

          </div>
        </div>

        <PeoplePage /> 

      </div>
    );
  }
}
