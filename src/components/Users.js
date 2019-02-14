import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions'

class Users extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.newUser) {
      this.props.users.push(nextProps.newUser);
    }
  }

  render() {
      const userItems = this.props.users.map(user => (
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


Users.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  newUser: PropTypes.object
}

const mapStateToProps = state => ({
  users: state.users.items,
  newUser: state.users.item
})

export default connect(mapStateToProps, { fetchUsers })(Users)
