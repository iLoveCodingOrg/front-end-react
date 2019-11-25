import store from 'store'
import {
  SET_OFFER_TIMES,
} from '../_app/actionTypes'

const initialState = {
  timeFrom: parseInt(store.get('timeFrom'), 10) || undefined,
  timeLeft: parseInt(store.get('timeLeft'), 10) || undefined,
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_OFFER_TIMES:
      store.set('timeFrom', parseInt(payload.timeFrom, 10) || undefined)
      store.set('timeLeft', parseInt(payload.timeLeft, 10) || undefined)

      return {
        ...state,
        timeFrom: parseInt(payload.timeFrom, 10) || undefined,
        timeLeft: parseInt(payload.timeLeft, 10) || undefined,
      }
    default:
      return state
  }
}
