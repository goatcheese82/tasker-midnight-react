import React, { Component } from 'react'

class Users extends Component {


  render() {
      const userItems = this.state.users.map(user => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
      ))
    return (
      <div>
        { userItems }
      </div>
    )
  }
}

export default Users;
