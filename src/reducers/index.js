import { combineReducers } from 'redux'
import user from './userReducer'
import inventory from './inventoryReducer'

export default combineReducers({
    user,
    inventory,
});