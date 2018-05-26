import { toast } from 'react-toastify'
import {
    SET_PRODUCT,
    SET_PRODUCT_LOADING,
    SET_CLIENT_TOKEN,
    SET_CLIENT_TOKEN_LOADING
} from '../_app/actionTypes'
import { API_URL } from '../_app/constants'
import {
    checkStatus,
    parseJSON
} from '../_app/utils'

export function setLoading(isLoading=true) {
    return {
        type: SET_PRODUCT_LOADING,
        payload: {
            isLoading
        }
    }
}

export function getProductBySlug(slug){
    const url = `${API_URL}products/${slug}/data`
    
    return (dispatch) => {
        dispatch(setLoading(true))

        return fetch(url, { credentials: 'include' })
        .then(checkStatus)
        .then(parseJSON)
        .then((json) => {
            dispatch(setProduct(null, json))
        })
        .catch((error) => {
            dispatch(setProduct(error))
        })
        .finally(()=>{
            dispatch(setLoading(false))
        })
    }
}

export function setProduct(error=null, data) {
    const action = {
        type: SET_PRODUCT
    }

    if(error){
        toast.error('Something went wrong! Could not load the product')

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

export function setClientTokenLoading(isLoading=true) {
    return {
        type: SET_CLIENT_TOKEN_LOADING,
        payload: {
            isLoading
        }
    }
}

export function getBraintreeClientToken(){
    const url = `${API_URL}payments/getToken`
    
    return (dispatch) => {
        dispatch(setClientTokenLoading(true))

        return fetch(url)
        .then(checkStatus)
        .then(parseJSON)
        .then((json) => {
            dispatch(setClientToken(null, json.braintreeClientToken))
        })
        .catch((error) => {
            dispatch(setClientToken(error))
        })
        .finally(()=>{
            dispatch(setClientTokenLoading(false))
        })
    }
}

export function setClientToken(error=null, clientToken) {
    const action = {
        type: SET_CLIENT_TOKEN
    }

    if(error){
        toast.error('Something went wrong! Could not load the client token')

        action.payload = {
            error: error,
            clientToken: ''
        }
    } else{
        action.payload = {
            error,
            clientToken
        }
    }

    return action
}