import store from 'store'
import {
    SET_OFFER_TIMES
} from '../_app/actionTypes'
const initialState = {
    timeFrom: store.get('timeFrom'),
    timeLeft: store.get('timeLeft')
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case SET_OFFER_TIMES:
            store.set('timeFrom', payload.timeFrom)
            store.set('timeLeft', payload.timeLeft)

            return {
                ...state,
                timeFrom: payload.timeFrom,
                timeLeft: payload.timeLeft
            }
        default:
            return state
    }
}