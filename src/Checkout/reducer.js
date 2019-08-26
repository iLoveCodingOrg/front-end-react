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

const initialState = {
  isLoading: true,
  error: false,
  product: {},
  braintree: {
    isLoading: true,
    error: false,
    clientToken: '',
  },
  buy: {
    isLoading: true,
    error: false,
    isEmailVerified: false,
    isSubscribed: false,
  },
  updateCreditCard: {
    isLoading: false,
    error: false,
    data: '',
  },
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_PRODUCT:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
        product: payload.data,
      }
    case SET_PRODUCT_LOADING:
      return {
        ...state,
        isLoading: payload.isLoading,
      }
    case SET_CLIENT_TOKEN:
      return {
        ...state,
        braintree: {
          isLoading: false,
          error: payload.error,
          clientToken: payload.clientToken,
        },
      }
    case SET_CLIENT_TOKEN_LOADING:
      return {
        ...state,
        braintree: {
          ...state.braintree,
          isLoading: payload.isLoading,
        },
      }
    case SET_BUY_STATUS:
      return {
        ...state,
        buy: {
          isLoading: false,
          error: payload.error,
          isEmailVerified: payload.isEmailVerified,
          isSubscribed: payload.isSubscribed,
        },
      }
    case SET_BUY_LOADING:
      return {
        ...state,
        buy: {
          ...state.buy,
          isLoading: payload.isLoading,
        },
      }
    case SET_UPDATE_CREDITCARD:
      return {
        ...state,
        updateCreditCard: {
          error: payload.error,
          data: payload.data,
          isLoading: false,
        },
      }
    case SET_UPDATE_CREDITCARD_LOADING:
      return {
        ...state,
        updateCreditCard: {
          ...state.updateCreditCard,
          isLoading: true,
        },
      }
    default:
      return state
  }
}
