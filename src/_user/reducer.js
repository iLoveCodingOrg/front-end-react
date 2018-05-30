import {
    SET_USER,
    CLEAR_USER,
    SET_USER_LOADING
} from '../_app/actionTypes'
const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    emailHash: '',
    activePlans: [],
    error: false,
    isLoading: true
}

export default function (state = initialState, { type, payload }) {
    switch(type){
        case SET_USER_LOADING:
            return {
                ...state,
                isLoading: payload.isLoading
            }
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