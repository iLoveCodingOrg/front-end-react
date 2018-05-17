import {
    SET_COURSES,
    CLEAR_COURSES
} from '../_app/actionTypes';
import {API_URL} from '../_app/constants'
import {
    checkStatus,
    parseJSON
} from '../_app/utils'

export function setCourses(courses) {
    return {
        type: SET_COURSES,
        payload: {
            courses
        }
    }
}

export function showError(err) {
    return {
        type: 'SHOW_ERROR',
        payload: {
            error
        }
    }
}

export function getCourses(){
    const url = `${API_URL}/courses`;
    
    return (dispatch) => {
        return fetch(url)
            .then(checkStatus)
            .then(parseJSON)
            .then((json) => {
                dispatch(setCourses(json));
            })
            .catch((err) => {
                dispatch(showError(err));
            });
    }
}

export function clearCourses(){
    return {
        type: CLEAR_COURSES
    }
}