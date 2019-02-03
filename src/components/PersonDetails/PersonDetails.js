import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import './PersonDetails.css';
import ErrorButton from '../ErrorButton';


export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null
  };

  componentDidMount() {
    this.updatePerson();
  };

  componentDidUpdate(prevProps) {
    if(this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  };

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then(person => {
        this.setState({ person });
      });
  };

  render() {

    if(!this.state.person) {
      return <span>Select a person from a list</span>;
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.person;

    return (
      <div className="person-details card">
        <img className="person-image" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">{`Gender: ${gender}`}</span>
            </li>
            <li className="list-group-item">
              <span className="term">{`Birth Year: ${birthYear}`}</span>
            </li>
            <li className="list-group-item">
              <span className="term">{`Eye Color: ${eyeColor}`}</span>
            </li>
          </ul>          
        </div>
      </div>
    )
  }
}
