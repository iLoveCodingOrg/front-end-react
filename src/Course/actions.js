import {
    SET_COURSES,
    CLEAR_COURSES,
    SET_COURSE,
    CLEAR_COURSE,
    SET_COURSE_LOADING
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

export function setLoading(isLoading=true) {
    return {
        type: SET_COURSE_LOADING,
        payload: {
            isLoading
        }
    }
}

export function getCourses(){
    const url = `${API_URL}courses/all`
    
    return (dispatch) => {
        dispatch(setLoading(true))
    
        return fetch(url, { credentials: 'include' })
        .then(checkStatus)
        .then(parseJSON)
        .then((json) => {
            dispatch(setCourses(json))
        })
        .catch((err) => {
            dispatch(showError(err))
        })
        .finally(()=>{
            dispatch(setLoading(false))
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
    const url = `${API_URL}courses/${slug}/data`
    
    return (dispatch) => {
        dispatch(setLoading(true))

        return fetch(url, { credentials: 'include' })
        .then(checkStatus)
            .then(parseJSON)
            .then((json) => {
                dispatch(setCourse(json))
            })
            .catch((err) => {
                dispatch(showError(err))
            })
            .finally(()=>{
                dispatch(setLoading(false))
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