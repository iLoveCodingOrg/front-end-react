import 'whatwg-fetch'
import get from 'lodash/get'
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

function checkInvalidFields({firstName, lastName, email, password}){
    const fields = []
    if (!firstName){
        fields.push('First Name')
    }
    if (!lastName){
        fields.push('Last Name')
    }
    if (!email){
        fields.push('Email')
    }
    if (!password){
        fields.push('Password')
    }

    return fields
}

export function signup(payload){   
    
    return (dispatch) => {
        // Validate fields
        const fields = checkInvalidFields(payload)
        
        if(fields.length > 0){
            const message = `${fields.join(', ')} are required`
    
            const p = new Promise((resolve)=>{ resolve()})
            return p.then(()=>{
                dispatch(setUser(message))
                return { isSuccess: false }
            })
        }

        // Call signup
        dispatch(setLoading(true))

        const url = `${API_URL}users`
        return fetch(url, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(checkStatus)
        .then(parseJSON)
        .then(() => {
            return { isSuccess: true }
        })
        .catch((error) => {
            parseJSON(error)
            .then((error) => {
                dispatch(setUser(error))
            })
            return { isSuccess: false }
        })
        .then((res)=>{
            dispatch(setLoading(false))
            return res
        })
    }
}

export function login(email, password){
    const url = `${API_URL}users/login`
    
    return (dispatch) => {
        dispatch(setLoading(true))

        return fetch(url, {
            method: 'POST',
            credentials: 'include',
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
        .then((res)=>{
            dispatch(setLoading(false))
            return res
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
        .catch((error)=>{})
    }
}

export function setUser(error=false, user) {
    const action = {
        type: SET_USER
    }
    let errorMessage
    const deepErrorMessage = get(error, 'error.message')
    
    if(error){
        if(typeof error === 'string'){
            errorMessage = error

        } else if (deepErrorMessage){
            
            if(deepErrorMessage.indexOf('Email already exists') > -1){
                errorMessage = 'Email is already registered'
            } else{
                errorMessage = deepErrorMessage
            }

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
                roles: userData.roles.map((item) => item.name),
                activePlans: userData.purchases.map((item)=> item.products)
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
    }
}

export function setSendVerifyEmail(error=false) {
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
