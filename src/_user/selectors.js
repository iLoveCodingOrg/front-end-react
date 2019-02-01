import { createSelector } from 'reselect'

const emailHash = (state) => state.user.emailHash
const activePlans = (state) => state.user.activePlans

export const isLoggedIn = createSelector([emailHash], (emailHash) => {
  return (emailHash)? true : false
})

export const getLevel = createSelector([activePlans], (activePlans) => {
  let type = 'free';
  
  if(activePlans.length){
    const isPremium = activePlans.some((plan) => {
      return plan.isGroupCalls
    })
    
    if (isPremium){
      type = 'premium'
    } else {
      type = 'pro'
    }
  }

  return type
})

export const isPaid = (state)=>{
  const level = getLevel(state)

  return (level !== 'free')? true : false 
}

export const isPro = (state)=>{
  const level = getLevel(state)

  return (level === 'pro')? true : false 
}

export const isPremium = (state)=>{
  const level = getLevel(state)

  return (level === 'premium')? true : false 
}
