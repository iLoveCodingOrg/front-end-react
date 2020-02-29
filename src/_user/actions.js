import 'whatwg-fetch'
import get from 'lodash/get'
import { toast } from 'react-toastify'

import {
  SET_USER_LOADING,
  SET_USER,
  SET_USER_LOCATION,
  CLEAR_USER,
  SET_SEND_VERIFY_EMAIL,
  CLEAR_USER_ERROR,
} from '../_app/actionTypes'
import { API_URL, IP_DATA_API_KEY } from '../_app/constants'
import {
  checkStatus,
  parseJSON,
} from '../_app/utils'

export function setLoading(isLoading = true) {
  return {
    type: SET_USER_LOADING,
    payload: {
      isLoading,
    },
  }
}

function checkInvalidFields({
  firstName, lastName, email, password, recaptchaToken,
}) {
  const fields = []
  if (!firstName) {
    fields.push('First Name')
  }
  if (!lastName) {
    fields.push('Last Name')
  }
  if (!email) {
    fields.push('Email')
  }
  if (!password) {
    fields.push('Password')
  }
  if (!recaptchaToken) {
    fields.push('reCaptcha')
  }

  return fields
}

export function signup(payload) {
  return (dispatch) => {
    // Validate fields
    const fields = checkInvalidFields(payload)

    if (fields.length > 0) {
      const pluralize = fields.length > 1 ? 'are' : 'is'
      const message = `${fields.join(', ')} ${pluralize} required`

      const p = new Promise((resolve) => { resolve() })
      return p.then(() => {
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
        'content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(() => ({ isSuccess: true }))
      .catch((error) => {
        parseJSON(error)
          .then((error) => {
            dispatch(setUser(error))
          })
        return { isSuccess: false }
      })
      .then((res) => {
        dispatch(setLoading(false))
        return res
      })
  }
}

function checkInvalidFieldsLogin({ email, password, recaptchaToken }) {
  const fields = []

  if (!email) {
    fields.push('Email')
  }
  if (!password) {
    fields.push('Password')
  }
  if (!recaptchaToken) {
    fields.push('reCaptcha')
  }

  return fields
}

export function login(email, password, recaptchaToken) {
  const url = `${API_URL}users/login`

  return (dispatch) => {
    // Validate fields
    const fields = checkInvalidFieldsLogin({
      email, password, recaptchaToken,
    })

    if (fields.length > 0) {
      const pluralize = fields.length > 1 ? 'are' : 'is'
      const message = `${fields.join(', ')} ${pluralize} required`

      const p = new Promise((resolve) => { resolve() })
      return p.then(() => {
        dispatch(setUser(message))
        return { isSuccess: false }
      })
    }

    // Login
    dispatch(setLoading(true))

    return fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, password, recaptchaToken, ttl: 60 * 60 * 24 * 7, // one week
      }),
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
      .then((res) => {
        dispatch(setLoading(false))
        return res
      })
  }
}

export function logout() {
  const url = `${API_URL}users/logout`

  return dispatch => fetch(url, {
    credentials: 'include',
    method: 'POST',
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

export function getUser() {
  const url = `${API_URL}users/me`

  return dispatch => fetch(url, { credentials: 'include' })
    .then(checkStatus)
    .then(parseJSON)
    .then((json) => {
      dispatch(setUser(false, json))
    })
    .catch((error) => {
      dispatch(setUser(error))
      dispatch(clearUser())
    })
}

export function setUser(error = false, user) {
  const action = {
    type: SET_USER,
  }
  let errorMessage
  const deepErrorMessage = get(error, 'error.message')

  if (error) {
    if (typeof error === 'string') {
      errorMessage = error
    } else if (deepErrorMessage) {
      if (deepErrorMessage.indexOf('Email already exists') > -1) {
        errorMessage = 'Email is already registered'
      } else {
        errorMessage = deepErrorMessage
      }
    } else {
      errorMessage = 'Something went wrong! could not complete request'
    }

    action.payload = {
      error: errorMessage,
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
        roles: userData.roles.map(item => item.name),
        activePlans: userData.purchases.map(item => item.products),
      },
    }
  }

  return action
}

export function clearUser() {
  return {
    type: CLEAR_USER,
  }
}

export function setSendVerifyEmail(error = false) {
  const action = {
    type: SET_SEND_VERIFY_EMAIL,
  }
  let errorMessage
  if (error) {
    if (typeof error === 'string') {
      errorMessage = error
    } else if (get(error, 'error.message')) {
      errorMessage = get(error, 'error.message')
    } else {
      errorMessage = 'Something went wrong! could not complete request'
    }

    action.payload = {
      error: errorMessage,
    }
  } else {
    const message = 'We just sent you an email to verify your account! Please check your email'

    action.payload = {
      error,
      verifyEmailStatus: message,
    }
  }

  return action
}

export function callSendVerifyEmail(email) {
  const url = `${API_URL}users/resend-verification-mail`

  return (dispatch) => {
    dispatch(setLoading(true))

    return fetch(url, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then(checkStatus)
      .then(parseJSON)
      .then((json) => {
        dispatch(setSendVerifyEmail(false, json))
      })
      .catch((error) => {
        parseJSON(error)
          .then((err) => {
            dispatch(setSendVerifyEmail(err))
          })
      })
  }
}

export function clearError() {
  return {
    type: CLEAR_USER_ERROR,
  }
}

export function setLocation(data) {
  return {
    type: SET_USER_LOCATION,
    payload: { data },
  }
}

export function getLocation() {
  return (dispatch) => {
    dispatch(setLoading(true))

    const url = `https://api.ipdata.co?api-key=${IP_DATA_API_KEY}`
    return fetch(url)
      .then(checkStatus)
      .then(parseJSON)
      .then((data) => {
        dispatch(setLocation({
          ip: data.ip,
          latitude: data.latitude,
          longitude: data.longitude,
          timeZone: data.time_zone,
          countryCode: data.country_code,
          city: data.city,
          region: data.region,
          regionCode: data.region_code,
        }))
        dispatch(setLoading(false))
        return { isSuccess: true }
      })
  }
}

export function callSubscribeToCRM({
  email, firstName, lastName, location, tags,
}) {
  return (dispatch) => {
    dispatch(setLoading(true))

    const timestampMS = Date.now()
    const timestampBase64 = btoa(timestampMS)

    const url = `${API_URL}users/crm/add-upsert`
    return fetch(url, {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        signupUrl: window.location.href,
        tags,
        location: {
          latitude: location.latitude,
          longitude: location.longitude,
          ip: location.ip,
          timeZone: location.timeZone.name,
        },
        mergeFields: {
          SU_TS_MS: timestampMS, // signup timestamp milliseconds
          SU_TS_EN: timestampBase64, // signup timestamp encrypted
        },
      }),
    })
      .then(checkStatus)
      .then(parseJSON)
      // eslint-disable-next-line camelcase
      .then(({
        isUserNew, merge_fields, timestamp_opt, status,
      }) => {
        dispatch(setLoading(false))
        return {
          isSuccess: true,
          isUserNew,
          status,
          timestampOptin: (new Date(timestamp_opt)).getTime(),
          timestampMS: merge_fields.SU_TS_MS,
          timestampBase64: merge_fields.SU_TS_EN,
        }
      })
      .catch((err) => {
        dispatch(setLoading(false))
        err.json()
          .then(({ error }) => {
            if (error.title === 'Member Exists') {
              toast.error('Your email is already in the list')
              return {
                isSuccess: false,
                errorType: 'Your email is already in the list',
              }
            }
            toast.error(error.message)
            return {
              isSuccess: false,
              errorType: error.message,
            }
          })
        return {
          isSuccess: false,
          errorType: 'EMAIL_EXIST' || 'EMAIL_FAKE',
        }
      })
  }
}
