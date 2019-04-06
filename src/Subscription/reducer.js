import {
    SET_SUBSCRIPTION,
    SET_SUBSCRIPTIONS,
    SET_SUBSCRIPTION_LOADING,
    SET_SUBSCRIPTIONS_LOADING,
} from '../_app/actionTypes'

const initialState = {
    list: {
        isLoading: true,
        error: false,
        data: []
    },
    view: {
        isLoading: true,
        error: false,
        data: {}
    }
}

export default (state = initialState, { payload, type })=>{
    switch(type){
        case SET_SUBSCRIPTIONS:
            return {
                ...state,
                list: {
                    isLoading: false,
                    error: payload.error,
                    data: payload.data
                }
            }
        case SET_SUBSCRIPTION:
            return {
                ...state,
                view: {
                    isLoading: false,
                    error: payload.error,
                    data: payload.data
                }
            }
        case SET_SUBSCRIPTION_LOADING:
            return {
                ...state,
                view: {
                    ...state.view,
                    isLoading: payload.isLoading
                }
            }
        case SET_SUBSCRIPTIONS_LOADING:
            return {
                ...state,
                list: {
                    ...state.list,
                    isLoading: payload.isLoading
                }
            }
        default:
            return state
    }
}