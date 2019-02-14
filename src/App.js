import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Users from './components/Users';
import UserForm from './components/UserForm';
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <UserForm />
          <Users />

        </div>
      </Provider>
    );
  }
}

export default App;
