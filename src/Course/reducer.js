import {
    SET_COURSES,
    CLEAR_COURSES,
    SET_COURSE,
    CLEAR_COURSE,
} from '../_app/actionTypes'
const initialState = {
    list: [],
    view: {
    }
}

export default function(state = initialState, { type, payload }) {
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
        default:
            return state
    }
}