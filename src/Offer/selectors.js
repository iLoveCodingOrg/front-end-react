import isNil from 'lodash/isNil'
import { getTimeDifference } from 'react-countdown-now'
import { createSelector } from 'reselect'

const timeFrom = state => state.offer.timeFrom
const timeLeft = state => state.offer.timeLeft

export const isOfferValidUtil = (timeFrom, timeLeft) => {
  let isValid = false

  if (isNil(timeLeft)) {
    return false
  }
  isValid = !getTimeDifference(timeFrom + timeLeft).completed

  return isValid
}

export const isOfferValidSelector = createSelector(
  [timeFrom, timeLeft],
  isOfferValidUtil,
)
