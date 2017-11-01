export default function reducer(state = {
    inventoryList: [
        {
            id: null,
            title: null,
            description: null,
            category: [],
            price: null,
            createdDate: null,
        },
    ],
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
            console.log('this suepr fully')
            return {
                ...state,
                fetching: false,
                fetched: true,
                inventoryList: action.payload
            }
        }
        case 'ADD_NEW_INVENTORY': {
            return {
                ...state,
                fetching: false,
                fetched: false,
                inventoryList: [...state.inventoryList, action.payload]
            }

        }
    }
    return state;
}