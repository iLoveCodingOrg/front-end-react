import { get } from 'lodash'
import { toast } from 'react-toastify'
import {
    SET_RESET_PASSWORD
} from '../_app/actionTypes'
import { API_URL } from '../_app/constants'
import {
    checkStatus,
    parseJSON
} from '../_app/utils'

export function callResetPassword(accessToken, email, password){
    const url = `${API_URL}users/reset-password?access_token=${accessToken}`
    
    return (dispatch) => {
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
            toast.success('Password changed successfulyy, Login with your new password')
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