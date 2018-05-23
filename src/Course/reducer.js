import {
    SET_COURSES,
    SET_COURSE,
    CLEAR_COURSE,
    SET_COURSE_LOADING,
    SET_COURSES_LIST_LOADING
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
        case SET_COURSES:
            return {
                ...state,
                list: {
                    isLoading: false,
                    error: payload.error,
                    data: payload.data
                }
            }
        case SET_COURSE:
            return {
                ...state,
                view: {
                    isLoading: false,
                    error: payload.error,
                    data: payload.data
                }
            }
        case CLEAR_COURSE:
            return {
                ...state,
                view: {
                    ...initialState.view
                }
            }
        case SET_COURSE_LOADING:
            return {
                ...state,
                view: {
                    ...state.view,
                    isLoading: payload.isLoading
                }
            }
        case SET_COURSES_LIST_LOADING:
            return {
                ...state,
                list: {
                    ...state.list,
                    isLoading: payload.isLoading
                }
            }
        default:
            return state
    }
}