import {
    SET_LESSONS,
    SET_LESSON,
    CLEAR_LESSON,
    SET_LESSON_LOADING,
    SET_LESSONS_LIST_LOADING,
    SET_LESSON_AS_COMPLETE
} from '../_app/actionTypes'
const initialState = {
    list: {
        isLoading: true,
        error: false,
        data: []
    },
    view: {
        isLoading: true,
        error: false,
        data: {}
    }
}

export default function (state = initialState, { type, payload }) {
    switch(type){
        case SET_LESSONS:
            return {
                ...state,
                list: {
                    isLoading: false,
                    error: payload.error,
                    data: payload.data
                }
            }
        case SET_LESSON:
            return {
                ...state,
                view: {
                    isLoading: false,
                    error: payload.error,
                    data: payload.data
                }
            }
        case CLEAR_LESSON:
            return {
                ...state,
                view: {
                    ...initialState.view
                }
            }
        case SET_LESSON_LOADING:
            return {
                ...state,
                view: {
                    ...state.view,
                    isLoading: payload.isLoading
                }
            }
        case SET_LESSONS_LIST_LOADING:
            return {
                ...state,
                list: {
                    ...state.list,
                    isLoading: payload.isLoading
                }
            }
        case SET_LESSON_AS_COMPLETE:
            return {
                ...state,
                view: {
                    ...state.view,
                    data: {
                        ...state.view.data,
                        isComplete: payload.isComplete
                    }
                }
            }
        default:
            return state
    }
}