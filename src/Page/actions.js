import {
    SET_PAGES,
    CLEAR_PAGES,
    SET_PAGE,
    CLEAR_PAGE,
    SET_PAGE_LOADING,
    SET_PAGES_LIST_LOADING
} from '../_app/actionTypes'
import { API_URL } from '../_app/constants'
import {
    checkStatus,
    parseJSON
} from '../_app/utils'

export function showError(error) {
    return {
        type: 'SHOW_ERROR',
        payload: {
            error
        }
    }
}

export function setLoadingView(isLoading=true) {
    return {
        type: SET_PAGE_LOADING,
        payload: {
            isLoading
        }
    }
}

export function setLoadingList(isLoading=true) {
    return {
        type: SET_PAGES_LIST_LOADING,
        payload: {
            isLoading
        }
    }
}

export function getPages(){
    const url = `${API_URL}pages`
    
    return (dispatch) => {
        dispatch(setLoadingList(false))

        return fetch(url, { credentials: 'include' })
        .then(checkStatus)
        .then(parseJSON)
        .then((json) => {
            dispatch(setPages(json))
        })
        .catch((err) => {
            dispatch(showError(err))
        })
        .finally(()=>{
            dispatch(setLoadingList(false))
        })
    }
}

export function setPages(pages) {
    return {
        type: SET_PAGES,
        payload: {
            pages
        }
    }
}

export function clearPages(){
    return {
        type: CLEAR_PAGES
    }
}

export function getPageBySlug(slug){
    const url = `${API_URL}pages/${slug}/data`
    
    return (dispatch) => {
        dispatch(setLoadingView(false))

        return fetch(url, { credentials: 'include' })
        .then(checkStatus)
            .then(parseJSON)
            .then((json) => {
                dispatch(setPage(json))
            })
            .catch((err) => {
                dispatch(showError(err))
            })
            .finally(()=>{
                dispatch(setLoadingView(false))
            })
    }
}

export function setPage(page) {
    return {
        type: SET_PAGE,
        payload: {
            page
        }
    }
}

export function clearPage(){
    return {
        type: CLEAR_PAGE
    }
}