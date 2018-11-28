import 'whatwg-fetch'
import { toast } from 'react-toastify'
import {
    SET_LESSONS,
    CLEAR_LESSONS,
    SET_LESSON,
    CLEAR_LESSON,
    SET_LESSON_LOADING,
    SET_LESSONS_LIST_LOADING,
    SET_LESSON_AS_COMPLETE
} from '../_app/actionTypes'
import { API_URL } from '../_app/constants'
import {
    checkStatus,
    parseJSON
} from '../_app/utils'
import { selectors } from '../_user'

export function setLoadingView(isLoading=true) {
    return {
        type: SET_LESSON_LOADING,
        payload: {
            isLoading
        }
    }
}

export function setLoadingList(isLoading=true) {
    return {
        type: SET_LESSONS_LIST_LOADING,
        payload: {
            isLoading
        }
    }
}

export function getLessons(){
    const url = `${API_URL}lessons/all`
    
    return (dispatch) => {
        dispatch(setLoadingList(true))

        return fetch(url, { credentials: 'include' })
        .then(checkStatus)
        .then(parseJSON)
        .then((json) => {
            dispatch(setLessons(null, json))
        })
        .catch((error) => {
            dispatch(setLessons(error))
        })
    }
}

export function setLessons(error=null, data) {
    const action = {
        type: SET_LESSONS
    }

    if(error){
        toast.error('Something went wrong! Could not load the lessons')

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

export function clearLessons(){
    return {
        type: CLEAR_LESSONS
    }
}

export function getLessonBySlug(slug){
    const url = `${API_URL}lessons/${slug}/data`
    
    return (dispatch) => {
        dispatch(setLoadingView(true))

        return fetch(url, { credentials: 'include' })
        .then(checkStatus)
            .then(parseJSON)
            .then((json) => {
                dispatch(setLesson(null, json))
            })
            .catch((err) => {
                dispatch(setLesson(err))
            })
    }
}

export function setLesson(error=null, data) {
    const action = {
        type: SET_LESSON
    }

    if(error){
        toast.error('Something went wrong! Could not load the lesson')

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

export function clearLesson(){
    return {
        type: CLEAR_LESSON
    }
}

export function callMarkLessonComplete(id){
    const url = `${API_URL}lessons/${id}/completed`
    return (dispatch, getState) => {
        if(selectors.isLoggedIn(getState()) || true){
            return fetch(url, {
                method: 'POST',
                credentials: 'include' })
                .then(checkStatus)
                .then(parseJSON)
                .then(() => {
                    dispatch(setLessonAsComplete())
                })
                .catch((error) => {
                })
        }
    }
}

export function setLessonAsComplete(isComplete = true){
    return {
        type: SET_LESSON_AS_COMPLETE,
        payload: { isComplete }
    }
}

export function updateLessonById(id, payload){
    const url = `${API_URL}lessons/${id}`
    
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

export function addLesson(payload){
    const url = `${API_URL}lessons`
    
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