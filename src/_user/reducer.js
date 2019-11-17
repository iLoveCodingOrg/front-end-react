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
  location: {
    ip: null,
    latitude: null,
    longitude: null,
    timezone: null,
    countryCode: null,
    city: null,
    region: null,
    regionCode: null,
  },
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
        location: {
          ip: payload.data.ip,
          latitude: payload.data.latitude,
          longitude: payload.data.longitude,
          timezone: payload.data.timezone,
          countryCode: payload.data.countryCode,
          city: payload.data.city,
          region: payload.data.region,
          regionCode: payload.data.regionCode,
        },
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
