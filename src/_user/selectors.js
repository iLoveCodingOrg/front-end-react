import { createSelector } from 'reselect'

const emailHash = (state) => state.user.emailHash

export const isLoggedIn = createSelector([emailHash], (emailHash) => {
    if(emailHash) {
      return true
    } else {
      return false
    }
  }
)