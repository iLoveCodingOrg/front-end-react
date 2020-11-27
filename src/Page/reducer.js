import {
  SET_PAGES,
  SET_PAGE,
  CLEAR_PAGE,
  SET_PAGE_LOADING,
  SET_PAGES_LIST_LOADING,
} from '../_app/actionTypes'

const initialState = {
  list: {
    isLoading: true,
    error: null,
    data: [],
  },
  view: {
    isLoading: true,
    error: null,
    data: {},
  },
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_PAGES:
      return {
        ...state,
        list: {
          isLoading: false,
          error: payload.error,
          data: payload.data,
        },
      }
    case SET_PAGE:
      return {
        ...state,
        view: {
          isLoading: false,
          error: payload.error,
          data: payload.data,
        },
      }
    case CLEAR_PAGE:
      return {
        ...state,
        view: {
          ...initialState.view,
        },
      }
    case SET_PAGE_LOADING:
      return {
        ...state,
        view: {
          ...state.view,
          isLoading: payload.isLoading,
        },
      }
    case SET_PAGES_LIST_LOADING:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: payload.isLoading,
        },
      }
    default:
      return state
  }
}
