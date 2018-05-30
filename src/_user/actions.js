import { get } from 'lodash'
import {
    SET_USER_LOADING,
    SET_USER,
    CLEAR_USER,
    SET_SEND_VERIFY_EMAIL
} from '../_app/actionTypes'
import { API_URL } from '../_app/constants'
import {
    checkStatus,
    parseJSON
} from '../_app/utils'

export function setLoading(isLoading=true) {
    return {
        type: SET_USER_LOADING,
        payload: {
            isLoading
        }
    }
}

export function login(email, password){
    const url = `${API_URL}users/login`
    
    return (dispatch) => {
        dispatch(setLoading(true))

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
            dispatch(setUser(false, json))
            return { isSuccess: true }
        })
        .catch((error) => {
            parseJSON(error)
            .then((error) => {
                dispatch(setUser(error))
            })
            return { isSuccess: false }
        })
        .finally(()=>{
            dispatch(setLoading(false))
        })
    }
}

export function logout(){
    const url = `${API_URL}users/logout`
    
    return (dispatch) => {
        return fetch(url, {
            credentials: 'include',
            method: 'POST'
        })
        .then(checkStatus)
        .then(() => {
            dispatch(clearUser())
            return { isSuccess: true }
        })
        .catch((error) => {
            dispatch(setUser(error))
            dispatch(clearUser())
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
            dispatch(setUser(false, json))
        })
    }
}

export function setUser(error=false, user) {
    const action = {
        type: SET_USER
    }
    let errorMessage
    
    if(error){
        if(typeof  error === 'string'){
            errorMessage = error
        } else if (get(error, 'error.message')){
            errorMessage = get(error, 'error.message')
        } else {
            errorMessage = 'Something went wrong! could not complete request'
        }

        action.payload = {
            error: errorMessage
        }
    } else {
        const { userData } = user
        action.payload = {
            error,
            user: {
                braintreeCustomerId: userData.braintreeCustomerId,
                email: userData.email,
                emailHash: userData.emailHash,
                emailVerified: userData.emailVerified,
                firstName: userData.firstName,
                lastName: userData.lastName,
                roles: userData.roles.map((item) => item.name)
            }
        }
    }

    return action
}

export function clearUser(){
    return {
        type: CLEAR_USER
    }
}

export function callSendVerifyEmail(email){
    const url = `${API_URL}users/resend-verification-mail`
    
    return (dispatch) => {
        dispatch(setLoading(true))

        return fetch(url, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
        .then(checkStatus)
        .then(parseJSON)
        .then((json) => {
            dispatch(setSendVerifyEmail(false, json))
        })
        .catch((error) => {
            parseJSON(error)
            .then((error) => {
                dispatch(setSendVerifyEmail(error))
            })
        })
        .finally(()=>{
            dispatch(setLoading(false))
        })
    }
}

export function setSendVerifyEmail(error=false, message) {
    const action = {
        type: SET_SEND_VERIFY_EMAIL
    }
    let errorMessage
    
    if(error){
        if(typeof  error === 'string'){
            errorMessage = error
        } else if (get(error, 'error.message')){
            errorMessage = get(error, 'error.message')
        } else {
            errorMessage = 'Something went wrong! could not complete request'
        }

        action.payload = {
            error: errorMessage
        }
    } else {
        const message = 'We just sent you an email to verify your account! Please check your email'

        action.payload = {
            error,
            verifyEmailStatus: message
        }
    }

    return action
}
