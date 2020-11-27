import {
  SET_BLOGS,
  SET_BLOG,
  CLEAR_BLOG,
  SET_BLOG_LOADING,
  SET_BLOGS_LIST_LOADING,
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
    case SET_BLOGS:
      return {
        ...state,
        list: {
          isLoading: false,
          error: payload.error,
          data: payload.data,
        },
      }
    case SET_BLOG:
      return {
        ...state,
        view: {
          isLoading: false,
          error: payload.error,
          data: payload.data,
        },
      }
    case CLEAR_BLOG:
      return {
        ...state,
        view: {
          ...initialState.view,
        },
      }
    case SET_BLOG_LOADING:
      return {
        ...state,
        view: {
          ...state.view,
          isLoading: payload.isLoading,
        },
      }
    case SET_BLOGS_LIST_LOADING:
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
