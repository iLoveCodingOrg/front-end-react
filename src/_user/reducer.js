import {
  SET_USER,
  CLEAR_USER,
  SET_USER_LOADING,
  SET_SEND_VERIFY_EMAIL,
  CLEAR_USER_ERROR,
  SET_USER_LOCATION,
} from '../_app/actionTypes'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  emailHash: '',
  activePlans: [],
  error: false,
  isLoading: false,
  verifyEmailStatus: '',
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_USER_LOADING:
      return {
        ...state,
        isLoading: payload.isLoading,
      }
    case SET_USER:
      return {
        ...state,
        ...payload.user,
        error: payload.error,
        isLoading: false,
        verifyEmailStatus: '',
      }
    case SET_USER_LOCATION:
      return {
        ...state,
      }
    case CLEAR_USER:
      return initialState
    case SET_SEND_VERIFY_EMAIL:
      return {
        ...state,
        error: payload.error,
        isLoading: false,
        verifyEmailStatus: payload.verifyEmailStatus,
      }
    case CLEAR_USER_ERROR:
      return {
        ...state,
        error: false,
      }
    default:
      return state
  }
}
