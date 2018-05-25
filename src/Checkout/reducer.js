import {
    SET_PRODUCT,
    SET_PRODUCT_LOADING
} from '../_app/actionTypes'
const initialState = {
    isLoading: true,
    error: false,
    product: []
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
        default:
            return state
    }
}