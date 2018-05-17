import {
    SET_LESSONS,
    CLEAR_LESSONS
} from '../_app/actionTypes'
import { API_URL } from '../_app/constants'
import {
    checkStatus,
    parseJSON
} from '../_app/utils'

export function setLessons(lessons) {
    return {
        type: SET_LESSONS,
        payload: {
            lessons
        }
    }
}

export function showError(error) {
    return {
        type: 'SHOW_ERROR',
        payload: {
            error
        }
    }
}

export function getLessons(){
    const url = `${API_URL}lessons`
    
    return (dispatch) => {
        return fetch(url)
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

export function clearLessons(){
    return {
        type: CLEAR_LESSONS
    }
}