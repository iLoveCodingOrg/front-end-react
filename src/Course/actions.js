import {
    SET_COURSES,
    CLEAR_COURSES,
    SET_COURSE,
    CLEAR_COURSE
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

export function getCourses(){
    const url = `${API_URL}courses`
    
    return (dispatch) => {
        return fetch(url)
        .then(checkStatus)
        .then(parseJSON)
        .then((json) => {
            dispatch(setCourses(json))
        })
        .catch((err) => {
            dispatch(showError(err))
        })
    }
}

export function setCourses(courses) {
    return {
        type: SET_COURSES,
        payload: {
            courses
        }
    }
}

export function clearCourses(){
    return {
        type: CLEAR_COURSES
    }
}

export function getCourseBySlug(slug){
    const url = `${API_URL}courses/${slug}/lesson`
    
    return (dispatch) => {
        return fetch(url)
        .then(checkStatus)
            .then(parseJSON)
            .then((json) => {
                dispatch(setCourse(json))
            })
            .catch((err) => {
                dispatch(showError(err))
            })
    }
}

export function setCourse(course) {
    return {
        type: SET_COURSE,
        payload: {
            course
        }
    }
}

export function clearCourse(){
    return {
        type: CLEAR_COURSE
    }
}