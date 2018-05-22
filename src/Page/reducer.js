import {
    SET_PAGES,
    CLEAR_PAGES,
    SET_PAGE,
    CLEAR_PAGE,
    SET_PAGE_LOADING,
    SET_PAGES_LIST_LOADING
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
        case SET_PAGE_LOADING:
            return {
                ...state,
                isLoadingView: payload.isLoading
            }
        case SET_PAGES_LIST_LOADING:
            return {
                ...state,
                isLoadingList: payload.isLoading
            }
        default:
            return state
    }
}