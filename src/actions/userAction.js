import axios from 'axios';



export function fetchUser() {
    return {
        type: 'FETCH_USERS_FULFILLED',
        payload: {
            id: 1,
            name: 'Dimitri',
            age: 26,
        }
    }
}

export function fetchAPIUser() {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then((res) => {
                dispatch({
                    type: 'FETCH_USERS_FULFILLED',
                    payload: res.data,
                })
            })
            .catch((err) => {
                dispatch({
                    type: 'FETCH_USERS_REJECTED',
                    payload: err,
                })
            })
    }

}
