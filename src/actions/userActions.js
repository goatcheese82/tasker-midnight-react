import { FETCH_USERS, NEW_USER } from './types';

export const fetchUsers = () => dispatch => {
    fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(users => dispatch({
            type: FETCH_USERS,
            users: users
        }));
}