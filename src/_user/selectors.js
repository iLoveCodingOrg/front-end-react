import { createSelector } from 'reselect'

const emailHash = state => state.user.emailHash
const activePlans = state => state.user.activePlans

export const isLoggedIn = createSelector([emailHash], emailHash => (!!(emailHash)))

export const getLevel = createSelector([activePlans], (activePlans) => {
  let type = 'free'

  if (activePlans.length) {
    const isPremium = activePlans.some(plan => plan.isGroupCalls)

    if (isPremium) {
      type = 'premium'
    } else {
      type = 'paid'
    }
  }

  return type
})

export const isPaid = (state) => {
  const level = getLevel(state)

  return (level !== 'free')
}

export const isPro = (state) => {
  const level = getLevel(state)

  return (level === 'pro')
}

export const isPremium = (state) => {
  const level = getLevel(state)

  return (level === 'premium')
}
