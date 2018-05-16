import { combineReducers } from 'redux'
import { reducer as home } from '../Home'
import { reducer as lessons } from '../Lesson'

var randomReducer = function(state={}, action){
    return state
}

// Reducer is responsible to update the state in the store
// based on the Actions that are applied to it
export default combineReducers({
    randomReducer,
    home,
    lessons
})
