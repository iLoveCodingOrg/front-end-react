import { combineReducers } from 'redux'
import { reducer as home } from '../Home'
import { reducer as pages } from '../Page'
import { reducer as lessons } from '../Lesson'
import { reducer as courses } from '../Course'

var randomReducer = function (state={}, action){
    return state
}

// Reducer is responsible to update the state in the store
// based on the Actions that are applied to it
export default combineReducers({
    randomReducer,
    home,
    pages,
    lessons,
    courses
})
