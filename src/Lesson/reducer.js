import {
    SET_LESSONS,
    CLEAR_LESSONS,
    SET_LESSON,
    CLEAR_LESSON,
} from '../_app/actionTypes'
const initialState = {
    list: [],
    view: {
    }
}

export default function(state = initialState, { type, payload }) {
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
        default:
            return state
    }
}