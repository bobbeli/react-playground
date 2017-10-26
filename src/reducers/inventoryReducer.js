export default function reducer(state = {
    inventory: {
        id: null,
        title: null,
        description: null,
        category: [],
        price: null,
        createdDate: null,
    },
    fetching: false,
    fetched: false,
    error: null,
}, action) {
    switch (action.type) {
        case 'FETCH_INVENTORY': {
            return {...state, fetching: true}
        }
        case 'FETCH_INVENTORY_REJECTED': {
            return {...state, fetching: false, error: action.payload}
        }
        case 'FETCH_INVENTORY_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                inventory: action.payload
            }
        }
        case 'ADD_NEW_INVENTORY': {
            console.log();
            return {
                ...state,
                fetching: false,
                fetched: false,
                inventory:state.inventory + action.payload
            }

        }
    }
    return state;
}