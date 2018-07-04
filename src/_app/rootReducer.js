import { combineReducers } from 'redux'
import { reducer as pages } from '../Page'
import { reducer as lessons } from '../Lesson'
import { reducer as courses } from '../Course'
import { reducer as checkout } from '../Checkout'
import { reducer as verifyEmail } from '../VerifyEmail'
import { reducer as user } from '../_user'
import { reducer as offer } from '../Offer'

// Reducer is responsible to update the state in the store
// based on the Actions that are applied to it
export default combineReducers({
    pages,
    lessons,
    courses,
    checkout,
    verifyEmail,
    user,
    offer
})
