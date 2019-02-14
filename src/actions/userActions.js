import { FETCH_USERS, NEW_USER } from './types';

export function fetchPosts() {
    return function(dispatch) {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(users => dispatch({
            type: FETCH_USERS,
            payload: users
        }));
    }
}