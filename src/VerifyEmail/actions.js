import { get } from 'lodash'
import { toast } from 'react-toastify'
import {
    SET_VERIFY_EMAIL_LOADING,
    SET_VERIFY_EMAIL
} from '../_app/actionTypes'
import { API_URL } from '../_app/constants'
import {
    checkStatus,
    parseJSON
} from '../_app/utils'


export function setLoading(isLoading=true) {
    return {
        type: SET_VERIFY_EMAIL_LOADING,
        payload: {
            isLoading
        }
    }
}

export function callVerifyEmail(uid, token){
    const url = `${API_URL}users/confirm?uid=${uid}&token=${token}`
    
    return (dispatch) => {
        dispatch(setLoading(true))

        return fetch(url)
        .then(checkStatus)
        .then(() => {
            dispatch(setVerifyEmail(false))
            return { isSuccess: true }
        })
        .catch((error) => {
            parseJSON(error)
            .then((error) => {
                dispatch(setVerifyEmail(error))
            })
            return { isSuccess: false }
        })
        .finally(()=>{
            dispatch(setLoading(false))
        })
    }
}

export function setVerifyEmail(error=false) {
    const action = {
        type: SET_VERIFY_EMAIL
    }
    let errorMessage
    if(error){
        if(typeof  error === 'string'){
            errorMessage = error
        } else if (get(error, 'error.message')){
            errorMessage = get(error, 'error.message')
        } else {
            errorMessage = 'Something went wrong! Could not verify your email'
        }

        action.payload = {
            error: errorMessage
        }
    } else{
        action.payload = {
            error
        }

        toast.success('Your email has been verified! Please login')
    }

    return action
}