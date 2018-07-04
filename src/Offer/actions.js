import {
  SET_OFFER_TIMES
} from '../_app/actionTypes'

export function setOfferTimes(timeFrom, timeLeft) {
  return {
      type: SET_OFFER_TIMES,
      payload: {
          timeFrom,
          timeLeft
      }
  }
}