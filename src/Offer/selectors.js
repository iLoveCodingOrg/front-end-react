import { getTimeDifference } from 'react-countdown-now'
import { createSelector } from 'reselect'

const timeFrom = (state) => state.offer.timeFrom
const timeLeft = (state) => state.offer.timeLeft

export const isOfferValid = createSelector([timeFrom, timeLeft], (timeFrom, timeLeft) => {
    const isValid = !getTimeDifference(timeFrom+timeLeft).completed
    console.log(timeFrom, timeLeft, timeFrom+timeLeft)
    console.log(isValid)
    return isValid
})