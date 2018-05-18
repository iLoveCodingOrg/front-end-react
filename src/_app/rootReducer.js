import { combineReducers } from 'redux'
import { reducer as home } from '../Home'
import { reducer as pages } from '../Page'
import { reducer as lessons } from '../Lesson'
import { reducer as courses } from '../Course'
import { reducer as user } from '../Login'

// Reducer is responsible to update the state in the store
// based on the Actions that are applied to it
export default combineReducers({
    home,
    pages,
    lessons,
    courses,
    user
})