import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUser } from '../actions/userActions'
//import ActiveStorageProvider from 'react-activestorage-provider'

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      birthdate: '',
      image: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }



  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  uploadHandler = (e) => {
    const url = e.target.value
    
    this.setState({image: url})
  }

  onSubmit = (e) => {
    e.preventDefault();


    const user = {
      name: this.state.name,
      email: this.state.email,
      birthdate: this.state.birthdate
    }

    //debugger

    this.props.createUser(user);
    this.setState({
      name: '',
      email: '',
      birthdate: '',
      image: ''
    })
  }

  render() {
    return (
      <div>
        <h1>Add User</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div>
            <label>Name:</label>
            <input type="text" name='name' onChange={this.onChange} value={this.state.name}></input>
          </div>
          <div>
            <label>Email:</label>
            <input type='text' name='email' onChange={this.onChange} value={this.state.email}></input>
          </div>
          <div>
            <label>Birthdate:</label>
            <input type='date' name='birthdate' onChange={this.onChange} value={this.state.birthdate}></input>
          </div>

          <button type='submit' >Submit</button>
        </form>
      </div>
    )
  }
}

UserForm.propTypes = {
  createUser: PropTypes.func.isRequired
};

export default connect(null, { createUser })(UserForm);
