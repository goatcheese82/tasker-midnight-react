import React, { Component } from 'react'

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      name: '',
      email: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }



  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    

    const user = {
      name: this.state.name,
      email: this.state.email
    }

    fetch('http://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)   
    })
    .then(res => res.json())
    .then(data => console.log(data));
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

export default UserForm;
