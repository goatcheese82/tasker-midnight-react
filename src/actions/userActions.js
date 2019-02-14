import { FETCH_USERS, NEW_USER } from './types';

export const fetchUsers = () => dispatch => {
    fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(users => dispatch({
            type: FETCH_USERS,
            users: users
        }));
}

export const createUser = (userData) => dispatch => {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(user => dispatch({
            type: NEW_USER,
            user: user
        }));
}