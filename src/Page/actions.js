import {
    SET_PAGES,
    CLEAR_PAGES,
    SET_PAGE,
    CLEAR_PAGE
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

export function getPages(){
    const url = `${API_URL}pages`
    
    return (dispatch) => {
        return fetch(url)
        .then(checkStatus)
        .then(parseJSON)
        .then((json) => {
            dispatch(setPages(json))
        })
        .catch((err) => {
            dispatch(showError(err))
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
        return fetch(url)
        .then(checkStatus)
            .then(parseJSON)
            .then((json) => {
                dispatch(setPage(json))
            })
            .catch((err) => {
                dispatch(showError(err))
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