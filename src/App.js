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
    this.setState({people: [...this.state.people, person]})
  }

  render() {
    return(
      <div className="container">
        <AddPerson addPerson={this.addPerson} />
        <div className="people">
          {this.state.people.map((person, index) => (
            <Person person={person} key={index} index={index} />
          ))}
        </div>
      </div>
    );
  }

}

export default App;
