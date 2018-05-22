import {
    SET_COURSES,
    CLEAR_COURSES,
    SET_COURSE,
    CLEAR_COURSE,
    SET_COURSE_LOADING,
    SET_COURSES_LIST_LOADING
} from '../_app/actionTypes'
const initialState = {
    list: [],
    view: {
    },
    isLoadingView: true,
    isLoadingList: true
}

export default function (state = initialState, { type, payload }) {
    switch(type){
        case SET_COURSES:
            return {
                ...state,
                list: payload.courses
            }
        case CLEAR_COURSES:
            return {
                ...state,
                list: []
            }
        case SET_COURSE:
            return {
                ...state,
                view: payload.course
            }
        case CLEAR_COURSE:
            return {
                ...state,
                view: {}
            }
        case SET_COURSE_LOADING:
            return {
                ...state,
                isLoadingView: payload.isLoading
            }
        case SET_COURSES_LIST_LOADING:
            return {
                ...state,
                isLoadingList: payload.isLoading
            }
        default:
            return state
    }
}