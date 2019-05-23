import 'whatwg-fetch'
import get from 'lodash/get'
import { toast } from 'react-toastify'

import { API_URL } from '../_app/constants'
import {
  checkStatus,
  parseJSON,
} from '../_app/utils'
import { logout } from '../_user/actions'

export function callChangePassword(currentPassword, newPassword) {
  const url = `${API_URL}users/change-password`

  return dispatch => fetch(url, {
    credentials: 'include',
    method: 'PUT',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify({
      currentPassword, newPassword,
    }),
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(() => {
      toast.success('Password changed successfully, Login with your new password.')
      return { isSuccess: true }
    })
    .then((json) => {
      if (json.isSuccess) {
        return dispatch(logout())
      }
      return {
        message: error.message || 'Something went wrong, could not change the password',
      }
    })
    .then((json) => {
      if (json.isSuccess) {
        return dispatch(logout())
      }
      return {
        message: error.message || 'Something went wrong, could not change the password',
      }
    })
    .catch(error => parseJSON(error)
      .then(error => ({
        isSuccess: false,
        message: get(error, 'error.message') || 'Request failed',
      })))
}
