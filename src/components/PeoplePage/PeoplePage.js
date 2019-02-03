import React, { Component } from 'react';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import './PeoplePage.css';
import ErrorIndicator from '../ErrorIndicator';


export default class PeoplePage extends Component {
  state = {
    selectedPerson: 4,
    hasError: false
  };

  componentDidCatch(error, info) {
    debugger;

    this.setState({
      hasError: true
    });
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    if(this.state.hasError) return <ErrorIndicator />;

    return(
      <div className="row mb-4">
        <div className="col-md-4">
          <ItemList onItemSelected={this.onPersonSelected}/>
        </div>
        <div className="col-md-8">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
};
