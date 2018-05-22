import {
    SET_LESSONS,
    CLEAR_LESSONS,
    SET_LESSON,
    CLEAR_LESSON,
    SET_LESSON_LOADING,
    SET_LESSONS_LIST_LOADING
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
        case SET_LESSONS:
            return {
                ...state,
                list: payload.lessons
            }
        case CLEAR_LESSONS:
            return {
                ...state,
                list: []
            }
        case SET_LESSON:
            return {
                ...state,
                view: payload.lesson
            }
        case CLEAR_LESSON:
            return {
                ...state,
                view: {}
            }
        case SET_LESSON_LOADING:
            return {
                ...state,
                isLoadingView: payload.isLoading
            }
        case SET_LESSONS_LIST_LOADING:
            return {
                ...state,
                isLoadingList: payload.isLoading
            }
        default:
            return state
    }
}