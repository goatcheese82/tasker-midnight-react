import React, { Component } from 'react';
import './App.css';
import Users from './components/Users';
import UserForm from './components/UserForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserForm />
        <Users />

      </div>
    );
  }
}

export default App;
