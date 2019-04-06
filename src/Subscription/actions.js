import 'whatwg-fetch'
import { toast } from 'react-toastify'
import {
    SET_SUBSCRIPTIONS,
    SET_SUBSCRIPTION,
    SET_SUBSCRIPTION_LOADING,
    SET_SUBSCRIPTIONS_LOADING,
} from '../_app/actionTypes'
import { API_URL } from '../_app/constants'
import {
    checkStatus,
    parseJSON
} from '../_app/utils'

export function setLoadingView(isLoading=true) {
    return {
        type: SET_SUBSCRIPTION_LOADING,
        payload: {
            isLoading
        }
    }
}

export function setLoadingList(isLoading=true) {
    return {
        type: SET_SUBSCRIPTIONS_LOADING,
        payload: {
            isLoading
        }
    }
}

export function getSubscriptions(){
    const url = `${API_URL}purchases/me`
    
    return (dispatch) => {
        dispatch(setLoadingList(true))

        return fetch(url, { credentials: 'include' })
        .then(checkStatus)
        .then(parseJSON)
        .then((json) => {
            dispatch(setSubscriptions(null, json))
        })
        .catch((error) => {
            dispatch(setSubscriptions(error))
        })
    }
}

export function setSubscriptions(error=null, data) {
    const action = {
        type: SET_SUBSCRIPTIONS
    }
    
    if(error && error.status === 404){
        toast.error('You have paid no subscriptions')
        
        action.payload = {
            data: []
        }
    } else if(error){
        toast.error('Something went wrong! Could not load the subscriptions')

        action.payload = {
            error: error,
            data: []
        }
    } else{
        action.payload = {
            error,
            data
        }
    }

    return action
}

export function getSubscriptionById(id){
    const url = `${API_URL}payments/subscriptions/${id}`
    
    return (dispatch) => {
        dispatch(setLoadingView(true))

        return fetch(url, { credentials: 'include' })
        .then(checkStatus)
            .then(parseJSON)
            .then((json) => {
                dispatch(setSubscription(null, json))
            })
            .catch((err) => {
                dispatch(setSubscription(err))
            })
    }
}

export function setSubscription(error=null, data) {
    const action = {
        type: SET_SUBSCRIPTION
    }

    if(error){
        toast.error('Something went wrong! Could not load the subscription')

        action.payload = {
            error: error,
            data: {}
        }
    } else{
        action.payload = {
            error,
            data
        }
    }

    return action
}