import React, { Component } from 'react';
import Main from '../Main';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';
import SwapiService from '../../services/SwapiService';
import DummySwapiService from '../../services/DummySwapiService';
import { SwapiServiceProvider } from '../SwapiServiceContext';
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage } from '../Pages';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import StarshipDetails from '../SWComponents/StarshipDetails';
import './App.css';


export default class App extends Component {

  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      console.log('Switched to ', Service.name);
      return { swapiService: new Service() };
    });
  };

  render() {

    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app container">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />

              <Switch>
                <Route path="/"
                       render={() => <Main />}
                       exact />

                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" component={StarshipsPage} exact />
                <Route path="/starships/:id"
                       render={({ match }) => {
                         const { id } = match.params;
                         return <StarshipDetails itemId={id} />
                       }}/>

                <Route
                  path="/login"
                  render={() => (
                    <LoginPage
                      isLoggedIn={isLoggedIn}
                      onLogin={this.onLogin} />
                  )}/>

                <Route
                  path="/secret"
                  render={() => (
                    <SecretPage isLoggedIn={isLoggedIn} />
                  )}/>

                <Redirect to="/" /> 
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
