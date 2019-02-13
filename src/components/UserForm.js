import React, { Component } from 'react'

class UserForm extends Component {

  render() {
    return (
      <div>
        <h1>Add User</h1>
        <form>

            <label>Name:</label>
            <input type="text"></input>
        </form>
      </div>
    )
  }
}

export default UserForm;
