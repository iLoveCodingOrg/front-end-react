import {
  SET_VERIFY_EMAIL_LOADING,
  SET_VERIFY_EMAIL,
} from '../_app/actionTypes'

const initialState = {
  isLoading: true,
  error: false,
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_VERIFY_EMAIL_LOADING:
      return {
        ...state,
        isLoading: payload.isLoading,
      }
    case SET_VERIFY_EMAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      }
    default:
      return state
  }
}
