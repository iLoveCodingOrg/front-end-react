import { toast } from 'react-toastify'
import {
    SET_COURSES,
    CLEAR_COURSES,
    SET_COURSE,
    CLEAR_COURSE,
    SET_COURSE_LOADING,
    SET_COURSES_LIST_LOADING
} from '../_app/actionTypes'
import { API_URL } from '../_app/constants'
import {
    checkStatus,
    parseJSON
} from '../_app/utils'

export function setLoadingView(isLoading=true) {
    return {
        type: SET_COURSE_LOADING,
        payload: {
            isLoading
        }
    }
}

export function setLoadingList(isLoading=true) {
    return {
        type: SET_COURSES_LIST_LOADING,
        payload: {
            isLoading
        }
    }
}

export function getCourses(){
    const url = `${API_URL}courses/all`
    
    return (dispatch) => {
        dispatch(setLoadingList(true))
    
        return fetch(url, { credentials: 'include' })
        .then(checkStatus)
        .then(parseJSON)
        .then((json) => {
            dispatch(setCourses(null, json))
        })
        .catch((error) => {
            dispatch(setCourses(error))
        })
        .finally(()=>{
            dispatch(setLoadingList(false))
        })
    }
}

export function setCourses(error=null, data) {
    const action = {
        type: SET_COURSES
    }

    if(error){
        toast.error('Something went wrong! Could not load the courses')

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

export function clearCourses(){
    return {
        type: CLEAR_COURSES
    }
}

export function getCourseBySlug(slug){
    const url = `${API_URL}courses/${slug}/data`
    
    return (dispatch) => {
        dispatch(setLoadingView(true))

        return fetch(url, { credentials: 'include' })
        .then(checkStatus)
            .then(parseJSON)
            .then((json) => {
                dispatch(setCourse(null, json))
            })
            .catch((err) => {
                dispatch(setCourse(err))
            })
            .finally(()=>{
                dispatch(setLoadingView(false))
            })
    }
}

export function setCourse(error=null, data) {
    const action = {
        type: SET_COURSE
    }

    if(error){
        toast.error('Something went wrong! Could not load the course')

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

export function clearCourse(){
    return {
        type: CLEAR_COURSE
    }
}