import { createStore,combineReducers } from 'redux'
import filterChampsReducer from './reducer';
const reducer=combineReducers({
    filterChamps:filterChampsReducer
})
const store=createStore(reducer)
export default store