import 'whatwg-fetch'
import { toast } from 'react-toastify'
import {
    SET_BLOGS,
    CLEAR_BLOGS,
    SET_BLOG,
    CLEAR_BLOG,
    SET_BLOG_LOADING,
    SET_BLOGS_LIST_LOADING,
} from '../_app/actionTypes'
import { API_URL } from '../_app/constants'
import {
    checkStatus,
    parseJSON
} from '../_app/utils'

export function setLoadingView(isLoading=true) {
    return {
        type: SET_BLOG_LOADING,
        payload: {
            isLoading
        }
    }
}

export function setLoadingList(isLoading=true) {
    return {
        type: SET_BLOGS_LIST_LOADING,
        payload: {
            isLoading
        }
    }
}

export function getBlogs(){
    const url = `${API_URL}blogs`
    
    return (dispatch) => {
        dispatch(setLoadingList(false))

        return fetch(url, { credentials: 'include' })
        .then(checkStatus)
        .then(parseJSON)
        .then((json) => {
            dispatch(setBlogs(null, json))
        })
        .catch((error) => {
            dispatch(setBlogs(error))
        })
    }
}

export function setBlogs(error=null, data) {
    const action = {
        type: SET_BLOGS
    }

    if(error){
        toast.error('Something went wrong! Could not load the blogs')

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

export function clearBlogs(){
    return {
        type: CLEAR_BLOGS
    }
}

export function getBlogBySlug(slug){
    const url = `${API_URL}blogs/${slug}/data`
    
    return (dispatch) => {
        dispatch(setLoadingView(true))

        return fetch(url, { credentials: 'include' })
        .then(checkStatus)
            .then(parseJSON)
            .then((json) => {
                dispatch(setBlog(null, json))
            })
            .catch((err) => {
                dispatch(setBlog(err))
            })
    }
}

export function setBlog(error=null, data) {
    const action = {
        type: SET_BLOG
    }

    if(error){
        toast.error('Something went wrong! Could not load the blog')

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

export function clearBlog(){
    return {
        type: CLEAR_BLOG
    }
}

export function updateBlogById(id, payload){
    const url = `${API_URL}blogs/${id}`
    
    return () => {
        return fetch(url, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...payload
            })
        })
        .then(checkStatus)
        .then(parseJSON)
        .then(() => {
            toast.success('Saved')
            return { isSuccess: true }
        })
        .catch((error) => {
            return parseJSON(error)
            .then((error) => {
                toast.error(error.error.message)
                return { isSuccess: false }
            })
        })
    }
}

export function addBlog(payload){
    const url = `${API_URL}blogs`
    
    return () => {
        return fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...payload
            })
        })
        .then(checkStatus)
        .then(parseJSON)
        .then((json) => {
            toast.success('Saved')
            return {
                ...json,
                isSuccess: true
            }
        })
        .catch((error) => {
            return parseJSON(error)
            .then((error) => {
                toast.error(error.error.message)
                return { isSuccess: false }
            })
        })
    }
}