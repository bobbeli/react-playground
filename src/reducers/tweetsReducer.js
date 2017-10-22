export default function reducer(state={
    tweets: [],
    fetching: false,
    fetched: false,
    error: null,
}, action){
    switch (action.type){
        case "FETCH_TWEETS": {
            return {...state, fetching: true}
        }
        case "FETCH_TWEETS_REJECTED": {
            return {...state, fetching: false, error: action.payload }
        }
        case "FETCH_USERS_FULFILLED": {
            return {...state,
                fetching: false,
                fetched: true,
                users: action.payload }
        }
        case "FETCH_TWEETS_REJECTED": {
            return {...state, fetching: false, error: action.payload }
        }
    }
    return state;
}