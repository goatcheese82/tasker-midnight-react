import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUser } from '../actions/userActions'

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }



  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();


    const user = {
      name: this.state.name,
      email: this.state.email
    }

    this.props.createUser(user);
  }

  render() {
    return (
      <div>
        <h1>Add User</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name='name' onChange={this.onChange} value={this.state.name}></input>
          </div>
          <div>
            <label>Email:</label>
            <input type='text' name='email' onChange={this.onChange} value={this.state.email}></input>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

UserForm.propTypes = {
  createUser: PropTypes.func.isRequired
};

export default connect(null, { createUser })(UserForm);
