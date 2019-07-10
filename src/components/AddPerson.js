import React, { Component } from 'react';
import './css/AddPerson.css';

class AddPerson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: '',
            LastName: '',
            Age: '',
            Info: '',
            isClosed: true
        }
    }

    getStyle = () => {
        return {
            display: this.state.isClosed ? 'none' : 'block'
        }
    }

    toggleForm = () => {
        this.setState({isClosed: !this.state.isClosed});
    }

    handleForm = (e) => {
        e.preventDefault();
        let newPerson = {
            firstName: this.state.FirstName,
            lastName: this.state.LastName,
            age: this.state.Age,
            info: this.state.Info
        }
        this.props.addPerson(newPerson);
    }

    render() {
        return(
            <div className="addPersonContainer">
                <h5>Add a new person <button style={btnStyle} onClick={this.toggleForm}><i className="fas fa-caret-down"></i></button></h5>

                <form onSubmit={this.handleForm} className="addPersonForm" style={this.getStyle()}>
                    <input placeholder="Enter first name" onChange={(e) => this.setState({FirstName: e.target.value})} /><br/>
                    <input placeholder="Enter last name" onChange={(e) => this.setState({LastName: e.target.value})} /><br/>
                    <input placeholder="Enter age" onChange={(e) => this.setState({Age: e.target.value})} /><br/>
                    <input placeholder="Enter info" onChange={(e) => this.setState({Info: e.target.value})} /><br/>
                    <button type="submit">Add</button>
                </form>
            </div>
            
        );
    }

    

}

const btnStyle = {
    width: '20px',
    height: '20px'
}

export default AddPerson;