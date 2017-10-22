export function fetchUser() {
    return {
        type: 'FETCH_USER_FULFILLED',
        payload: {
            name: 'Dimitri',
            age: 34,
        }
    }
}