import {
    SET_USER,
    CLEAR_USER
} from '../_app/actionTypes'
const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    emailHash: '',
    activePlans: []
}

export default function (state = initialState, { type, payload }) {
    switch(type){
        case SET_USER:
            return {
                ...payload.user
            }
        case CLEAR_USER:
            return initialState
        default:
            return state
    }
}