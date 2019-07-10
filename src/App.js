import React, { Component } from 'react';
import Person from './components/Person';
import AddPerson from './components/AddPerson';
import './components/css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          id: '1',
          firstName: 'Daniel',
          lastName: 'Ignatyuk',
          age: 18,
          info: 'A full-stack software developer'
        }
      ]
    }
  }

  addPerson = (person) => {
    console.log(person);
    this.setState({people: [...this.state.people, person]});
  }

  deletePerson = (id) => {
    this.setState({people: [...this.state.people.filter(person => person.id !== id)]});
  }

  render() {
    return(
      <div className="container">
        <AddPerson addPerson={this.addPerson} />
        <div className="people">
          {this.state.people.map((person, index) => (
            <Person person={person} key={index} index={index} deletePerson={this.deletePerson} />
          ))}
        </div>
      </div>
    );
  }

}

export default App;
