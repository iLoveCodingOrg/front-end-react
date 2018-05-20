import {
    SET_USER,
    CLEAR_USER
} from '../_app/actionTypes'
import { API_URL } from '../_app/constants'
import {
    checkStatus,
    parseJSON
} from '../_app/utils'

export function showError(error) {
    return {
        type: 'SHOW_ERROR',
        payload: {
            error
        }
    }
}

export function login(email, password){
    const url = `${API_URL}users/login`
    
    return (dispatch) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password
            })
        })
        .then(checkStatus)
        .then(parseJSON)
        .then((json) => {
            dispatch(setUser(json))
            return { isSuccess: true }
        })
        .catch((err) => {
            dispatch(showError(err))
            return { isSuccess: false }
        })
    }
}

export function getUser(){
    const url = `${API_URL}users/me`
    
    return (dispatch) => {
        return fetch(url, { credentials: 'include' })
        .then(checkStatus)
        .then(parseJSON)
        .then((json) => {
            dispatch(setUser(json))
        })
        .catch((err) => {
            dispatch(showError(err))
        })
    }
}

export function setUser({ userData }) {
    return {
        type: SET_USER,
        payload: {
            user: {
                braintreeCustomerId: userData.braintreeCustomerId,
                emailHash: userData.emailHash,
                emailVerified: userData.emailVerified,
                firstName: userData.firstName,
                lastName: userData.lastName,
                roles: userData.roles.map((item) => item.name)
            }
        }
    }
}

export function clearUser(){
    return {
        type: CLEAR_USER
    }
}
