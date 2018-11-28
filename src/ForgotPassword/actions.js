import 'whatwg-fetch'
import { get } from 'lodash'
import { toast } from 'react-toastify'
import { API_URL } from '../_app/constants'
import {
    checkStatus,
    parseJSON
} from '../_app/utils'

export function callForgotPassword(email){
    const url = `${API_URL}users/reset`
    
    return () => {
        return fetch(url, {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ email })
        })
        .then(checkStatus)
        .then(() => {
            toast.success('Check your email, we just sent you instructions to reset your password', {
                autoClose: false
            })
            return { isSuccess: true }
        })
        .catch((error) => {
            return parseJSON(error)
            .then((error) => {
                return {
                    isSuccess: false,
                    message: get(error, 'error.message') || 'Request failed'
                }
            })
        })
    }
}

export function callResetPassword(accessToken, email, password){
    const url = `${API_URL}users/reset-password?access_token=${accessToken}`
    
    return () => {
        return fetch(url, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password
            })
        })
        .then(checkStatus)
        .then(parseJSON)
        .then(() => {
            toast.success('Password changed successfully, Login with your new password')
            return { isSuccess: true }
        })
        .catch((error) => {
            return parseJSON(error)
            .then((error) => {
                return {
                    isSuccess: false,
                    message: get(error, 'error.message') || 'Request failed'
                }
            })
        })
    }
}