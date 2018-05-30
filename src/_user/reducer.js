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
    isLoading: false
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
                ...state,
                ...payload.user,
                error: payload.error,
                isLoading: false
            }
        case CLEAR_USER:
            return initialState
        default:
            return state
    }
}