import {
    SET_PAGES,
    CLEAR_PAGES,
    SET_PAGE,
    CLEAR_PAGE
} from '../_app/actionTypes'
const initialState = {
    list: [],
    view: {
    }
}

export default function (state = initialState, { type, payload }) {
    switch(type){
        case SET_PAGES:
            return {
                ...state,
                list: payload.pages
            }
        case CLEAR_PAGES:
            return {
                ...state,
                list: []
            }
        case SET_PAGE:
            return {
                ...state,
                view: payload.page
            }
        case CLEAR_PAGE:
            return {
                ...state,
                view: {}
            }
        default:
            return state
    }
}