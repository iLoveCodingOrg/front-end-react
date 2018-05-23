import { toast } from 'react-toastify'
import {
    SET_PAGES,
    CLEAR_PAGES,
    SET_PAGE,
    CLEAR_PAGE,
    SET_PAGE_LOADING,
    SET_PAGES_LIST_LOADING,
} from '../_app/actionTypes'
import { API_URL } from '../_app/constants'
import {
    checkStatus,
    parseJSON
} from '../_app/utils'

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
            dispatch(setPages(null, json))
        })
        .catch((error) => {
            dispatch(setPages(error))
        })
        .finally(()=>{
            dispatch(setLoadingList(false))
        })
    }
}

export function setPages(error=null, data) {
    const action = {
        type: SET_PAGES
    }

    if(error){
        toast.error('Something went wrong! Could not load the pages')

        action.payload = {
            error: error,
            data: []
        }
    } else{
        action.payload = {
            error,
            data
        }
    }

    return action
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
                dispatch(setPage(null, json))
            })
            .catch((err) => {
                dispatch(setPage(err))
            })
            .finally(()=>{
                dispatch(setLoadingView(false))
            })
    }
}

export function setPage(error=null, data) {
    const action = {
        type: SET_PAGE
    }

    if(error){
        toast.error('Something went wrong! Could not load the page')

        action.payload = {
            error: error,
            data: {}
        }
    } else{
        action.payload = {
            error,
            data
        }
    }

    return action
}

export function clearPage(){
    return {
        type: CLEAR_PAGE
    }
}