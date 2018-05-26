import {
    SET_PRODUCT,
    SET_PRODUCT_LOADING,
    SET_CLIENT_TOKEN,
    SET_CLIENT_TOKEN_LOADING
} from '../_app/actionTypes'
const initialState = {
    isLoading: true,
    error: false,
    product: [],
    braintree: {
        isLoading: true,
        error: false,
        clientToken: '',
        nonce: ''
    }
}

export default function (state = initialState, { type, payload }) {
    switch(type){
        case SET_PRODUCT:
            return {
                ...state,
                isLoading: false,
                error: payload.error,
                product: payload.data
            }
        case SET_PRODUCT_LOADING:
            return {
                ...state,
                isLoading: payload.isLoading
            }
        case SET_CLIENT_TOKEN:
            return {
                ...state,
                braintree: {
                    isLoading: false,
                    error: payload.error,
                    clientToken: payload.clientToken
                }
            }
        case SET_CLIENT_TOKEN_LOADING:
            return {
                ...state,
                braintree: {
                    ...state.braintree,
                    isLoading: payload.isLoading
                }
            }
        default:
            return state
    }
}