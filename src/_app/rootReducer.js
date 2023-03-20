import { combineReducers } from 'redux'
import { reducer as pages } from '../Page'
import { reducer as blogs } from '../Blog'
import { reducer as questions } from '../Question'
import { reducer as lessons } from '../Lesson'
import { reducer as courses } from '../Course'
import { reducer as verifyEmail } from '../VerifyEmail'
import { reducer as user } from '../_user'
import { reducer as offer } from '../Offer'
import { reducer as subscriptions } from '../Subscription'

// Reducer is responsible to update the state in the store
// based on the Actions that are applied to it
export default combineReducers({
  pages,
  blogs,
  questions,
  lessons,
  courses,
  checkout,
  verifyEmail,
  user,
  offer,
  subscriptions,
})
