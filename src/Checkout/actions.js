import 'whatwg-fetch'
import get from 'lodash/get'
import { toast } from 'react-toastify'
import {
  SET_PRODUCT,
  SET_PRODUCT_LOADING,
  SET_CLIENT_TOKEN,
  SET_CLIENT_TOKEN_LOADING,
  SET_BUY_STATUS,
  SET_BUY_LOADING,
  SET_UPDATE_CREDITCARD,
  SET_UPDATE_CREDITCARD_LOADING,
} from '../_app/actionTypes'
import { API_URL } from '../_app/constants'
import {
  checkStatus,
  parseJSON,
  jsonToUrlEncoded,
} from '../_app/utils'

export function setLoading(isLoading = true) {
  return {
    type: SET_PRODUCT_LOADING,
    payload: {
      isLoading,
    },
  }
}

export function getProductBySlug(slug) {
  const url = `${API_URL}products/${slug}/data`

  return (dispatch) => {
    dispatch(setLoading(true))

    return fetch(url)
      .then(checkStatus)
      .then(parseJSON)
      .then((json) => {
        dispatch(setProduct(null, json))
      })
      .catch((error) => {
        dispatch(setProduct(error))
      })
  }
}

export function setProduct(error = null, data) {
  const action = {
    type: SET_PRODUCT,
  }

  if (error) {
    toast.error('Something went wrong! Could not load the product')

    action.payload = {
      error,
      data: {},
    }
  } else {
    action.payload = {
      error,
      data,
    }
  }

  return action
}

export function setClientTokenLoading(isLoading = true) {
  return {
    type: SET_CLIENT_TOKEN_LOADING,
    payload: {
      isLoading,
    },
  }
}

export function setUpdateCreditCardLoading(isLoading = true) {
  return {
    type: SET_UPDATE_CREDITCARD_LOADING,
    payload: {
      isLoading,
    },
  }
}

export function getBraintreeClientToken() {
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
  }
}

export function setClientToken(error = null, clientToken) {
  const action = {
    type: SET_CLIENT_TOKEN,
  }

  if (error) {
    toast.error('Something went wrong! Could not load the client token')

    action.payload = {
      error,
      clientToken: '',
    }
  } else {
    action.payload = {
      error,
      clientToken,
    }
  }

  return action
}

export function setBuyLoading(isLoading = true) {
  return {
    type: SET_BUY_LOADING,
    payload: {
      isLoading,
    },
  }
}

export function buy(slug, {
  firstName, lastName, email, nonce, coupon, recaptchaToken,
}) {
  const url = `${API_URL}purchases/product/${slug}/buy`

  return (dispatch) => {
    dispatch(setBuyLoading(true))

    return fetch(url, {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: jsonToUrlEncoded({
        firstName, lastName, email, nonce, coupon, recaptchaToken,
      }),
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(({ isSubscribed, isEmailVerified, message }) => {
        if (isSubscribed) {
          dispatch(setBuyStatus(null, { isSubscribed, isEmailVerified }))
          return { isSubscribed }
        }
        dispatch(setBuyStatus(message, { isSubscribed, isEmailVerified }))
        return { isSubscribed: false }
      })
      .catch(error => parseJSON(error)
        .then((error) => {
          dispatch(setBuyStatus(error))
          return { isSubscribed: false }
        }))
  }
}

export function setBuyStatus(error = null, status = {}) {
  const { isSubscribed, isEmailVerified, message } = status

  const action = {
    type: SET_BUY_STATUS,
  }
  let errorMessage
  if (error) {
    if (typeof error === 'string') {
      errorMessage = error
    } else if (get(error, 'error.message')) {
      errorMessage = get(error, 'error.message')
    } else {
      errorMessage = 'Something went wrong! Could not complete purchase'
    }
    toast.error(errorMessage)

    action.payload = {
      error: errorMessage,
    }
  } else {
    action.payload = {
      error,
      isSubscribed,
      isEmailVerified,
      message,
    }
  }

  return action
}

function setUpdateCreditCard(error = null, data = {}) {
  return {
    type: SET_UPDATE_CREDITCARD,
    payload: {
      error,
      data,
    },
  }
}

export function updateBraintreeCreditCard(subscriptionId, nonce) {
  console.log('updateBraintreeCreditCard', subscriptionId, nonce)
  const url = `${API_URL}payments/subscriptions/${subscriptionId}/update-card?paymentMethodNonce=${nonce}`

  return (dispatch) => {
    dispatch(setUpdateCreditCardLoading(true))

    return fetch(url, {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(checkStatus)
      .then(parseJSON)
      .then((json) => {
        dispatch(setUpdateCreditCard(null, json))
        return { isSuccess: true }
      })
      .catch((error) => {
        dispatch(setUpdateCreditCard(error))
        return { isSuccess: false }
      })
  }
}
