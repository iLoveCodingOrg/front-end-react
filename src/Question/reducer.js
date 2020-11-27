import {
  SET_QUESTIONS,
  SET_QUESTION,
  CLEAR_QUESTION,
  SET_QUESTION_LOADING,
  SET_QUESTIONS_LIST_LOADING,
  SET_QUESTION_AS_COMPLETE,
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
    case SET_QUESTIONS:
      return {
        ...state,
        list: {
          isLoading: false,
          error: payload.error,
          data: payload.data,
        },
      }
    case SET_QUESTION:
      return {
        ...state,
        view: {
          isLoading: false,
          error: payload.error,
          data: payload.data,
        },
      }
    case CLEAR_QUESTION:
      return {
        ...state,
        view: {
          ...initialState.view,
        },
      }
    case SET_QUESTION_LOADING:
      return {
        ...state,
        view: {
          ...state.view,
          isLoading: payload.isLoading,
        },
      }
    case SET_QUESTIONS_LIST_LOADING:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: payload.isLoading,
        },
      }
    case SET_QUESTION_AS_COMPLETE:
      return {
        ...state,
        view: {
          ...state.view,
          data: {
            ...state.view.data,
            isComplete: payload.isComplete,
          },
        },
      }
    default:
      return state
  }
}
