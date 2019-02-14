import React, { Component } from 'react'

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentWillMount() {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => this.setState({ users: data}));
    }
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
