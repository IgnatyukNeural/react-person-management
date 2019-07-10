import React, { Component } from 'react'
import './css/Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {isInfoOpen: false};
        this.toggleInfo = this.toggleInfo.bind(this);
    }

    toggleInfo = () => {
        this.setState({isInfoOpen: !this.state.isInfoOpen})
    }

    personInfo = () => {
        return {
            display: this.state.isInfoOpen ? 'block' : 'none',
            transition: 'all .5s ease-in-out'
        }
    }

    render() {
        return(
            <div className="person">
                <p>{this.props.person.firstName} {this.props.person.lastName} <button onClick={this.toggleInfo} style={btnStyle}><i className="fas fa-caret-down"></i></button></p>
                <div className="person-info" style={this.personInfo()}>
                    <p>Age: {this.props.person.age}</p>
                    <p>Info: {this.props.person.info}</p>
                </div>
            </div>
        );
    }
}


const btnStyle = {
    float: 'right',
    width: '20px',
    height: '20px'
}

export default Person;