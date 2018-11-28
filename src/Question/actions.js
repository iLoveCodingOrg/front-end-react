import 'whatwg-fetch'
import { toast } from 'react-toastify'
import {
    SET_QUESTIONS,
    CLEAR_QUESTIONS,
    SET_QUESTION,
    CLEAR_QUESTION,
    SET_QUESTION_LOADING,
    SET_QUESTIONS_LIST_LOADING,
    SET_QUESTION_AS_COMPLETE
} from '../_app/actionTypes'
import { API_URL } from '../_app/constants'
import {
    checkStatus,
    parseJSON
} from '../_app/utils'
import { selectors } from '../_user'

export function setLoadingView(isLoading=true) {
    return {
        type: SET_QUESTION_LOADING,
        payload: {
            isLoading
        }
    }
}

export function setLoadingList(isLoading=true) {
    return {
        type: SET_QUESTIONS_LIST_LOADING,
        payload: {
            isLoading
        }
    }
}

export function getQuestions(){
    const url = `${API_URL}lessons/questions`
    
    return (dispatch) => {
        dispatch(setLoadingList(true))

        return fetch(url, { credentials: 'include' })
        .then(checkStatus)
        .then(parseJSON)
        .then((json) => {
            dispatch(setQuestions(null, json))
        })
        .catch((error) => {
            dispatch(setQuestions(error))
        })
    }
}

export function setQuestions(error=null, data) {
    const action = {
        type: SET_QUESTIONS
    }

    if(error){
        toast.error('Something went wrong! Could not load the questions')

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

export function clearQuestions(){
    return {
        type: CLEAR_QUESTIONS
    }
}

export function getQuestionBySlug(slug){
    const url = `${API_URL}lessons/${slug}/data`
    
    return (dispatch) => {
        dispatch(setLoadingView(true))

        return fetch(url, { credentials: 'include' })
        .then(checkStatus)
            .then(parseJSON)
            .then((json) => {
                dispatch(setQuestion(null, json))
            })
            .catch((err) => {
                dispatch(setQuestion(err))
            })
    }
}

export function setQuestion(error=null, data) {
    const action = {
        type: SET_QUESTION
    }

    if(error){
        toast.error('Something went wrong! Could not load the question')

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

export function clearQuestion(){
    return {
        type: CLEAR_QUESTION
    }
}

export function callMarkQuestionComplete(id){
    const url = `${API_URL}questions/${id}/completed`
    return (dispatch, getState) => {
        if(selectors.isLoggedIn(getState()) || true){
            return fetch(url, {
                method: 'POST',
                credentials: 'include' })
                .then(checkStatus)
                .then(parseJSON)
                .then(() => {
                    dispatch(setQuestionAsComplete())
                })
                .catch((error) => {
                })
        }
    }
}

export function setQuestionAsComplete(isComplete = true){
    return {
        type: SET_QUESTION_AS_COMPLETE,
        payload: { isComplete }
    }
}

export function updateQuestionById(id, payload){
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

export function addQuestion(payload){
    
    if(payload.topic.length === 1){
        payload.topic[0] = "question"
    }

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