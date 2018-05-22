import {
    SET_LESSONS,
    CLEAR_LESSONS,
    SET_LESSON,
    CLEAR_LESSON
} from '../_app/actionTypes'
import { API_URL } from '../_app/constants'
import {
    checkStatus,
    parseJSON
} from '../_app/utils'

import { logError } from '../_app/logService'

export function showError(error) {
    logError(new Error('show error hi'))
    return {
        type: 'SHOW_ERROR',
        payload: {
            error
        }
    }
}

export function getLessons(){
    const url = `${API_URL}lessons/all`
    
    return (dispatch) => {
        return fetch(url, { credentials: 'include' })
        .then(checkStatus)
        .then(parseJSON)
        .then((json) => {
            dispatch(setLessons(json))
        })
        .catch((err) => {
            dispatch(showError(err))
        })
    }
}

export function setLessons(lessons) {
    return {
        type: SET_LESSONS,
        payload: {
            lessons
        }
    }
}

export function clearLessons(){
    return {
        type: CLEAR_LESSONS
    }
}

export function getLessonBySlug(slug){
    const url = `${API_URL}lessons/${slug}/data`
    
    return (dispatch) => {
        return fetch(url, { credentials: 'include' })
        .then(checkStatus)
            .then(parseJSON)
            .then((json) => {
                dispatch(setLesson(json))
            })
            .catch((err) => {
                dispatch(showError(err))
            })
    }
}

export function setLesson(lesson) {
    return {
        type: SET_LESSON,
        payload: {
            lesson
        }
    }
}

export function clearLesson(){
    return {
        type: CLEAR_LESSON
    }
}