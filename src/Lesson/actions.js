import 'whatwg-fetch'
import { toast } from 'react-toastify'
import {
    SET_LESSONS,
    CLEAR_LESSONS,
    SET_LESSON,
    CLEAR_LESSON,
    SET_LESSON_LOADING,
    SET_LESSONS_LIST_LOADING
} from '../_app/actionTypes'
import { API_URL } from '../_app/constants'
import {
    checkStatus,
    parseJSON
} from '../_app/utils'

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