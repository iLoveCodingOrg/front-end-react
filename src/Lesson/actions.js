import { toast } from 'react-toastify'
import 'whatwg-fetch'
import {
  CLEAR_LESSON,
  CLEAR_LESSONS,
  SET_LESSON,
  SET_LESSON_AS_COMPLETE,
  SET_LESSON_LOADING,
  SET_LESSONS,
  SET_LESSONS_LIST_LOADING,
} from '../_app/actionTypes'
import { API_URL } from '../_app/constants'
import LessonsData from '../_app/data/Lesson.json'
import {
  checkStatus,
  parseJSON,
} from '../_app/utils'
import { selectors } from '../_user'

export function setLoadingView(isLoading = true) {
  return {
    type: SET_LESSON_LOADING,
    payload: {
      isLoading,
    },
  }
}

export function setLoadingList(isLoading = true) {
  return {
    type: SET_LESSONS_LIST_LOADING,
    payload: {
      isLoading,
    },
  }
}

export function getLessons(type) {
  let filter = {}

  if (type === 'project') {
    filter = { where: { topic: 'Project' } }
  } else if (type === 'core') {
    filter = { where: { topic: 'Core Training' } }
  }

  return (dispatch) => {
    dispatch(setLoadingList(true))

    try {
      const filteredLessons = LessonsData.filter((lesson) => {
        if (filter.where && filter.where.topic) {
          return lesson.topic.includes(filter.where.topic)
        }
        return true
      })
      dispatch(setLessons(null, filteredLessons))
    } catch (error) {
      dispatch(setLessons(error))
    }
  }
}

export function setLessons(error = null, data) {
  const action = {
    type: SET_LESSONS,
  }

  if (error) {
    toast.error('Something went wrong! Could not load the lessons')

    action.payload = {
      error,
      data: [],
    }
  } else {
    action.payload = {
      error,
      data,
    }
  }

  return action
}

export function clearLessons() {
  return {
    type: CLEAR_LESSONS,
  }
}

export function getLessonBySlug(slug) {
  return (dispatch) => {
    dispatch(setLoadingView(true))

    try {
      const lesson = LessonsData.find(lesson => lesson.slug === slug)
      if (lesson) {
        dispatch(setLesson(null, lesson))
      } else {
        throw new Error('Lesson not found')
      }
    } catch (error) {
      dispatch(setLesson(error))
    }
  }
}

export function setLesson(error = null, data) {
  const action = {
    type: SET_LESSON,
  }

  if (error) {
    toast.error('Something went wrong! Could not load the lesson')

    action.payload = {
      error,
      data: {},
    }
  } else {
    action.payload = {
      error,
      data,
    }
  }

  return action
}

export function clearLesson() {
  return {
    type: CLEAR_LESSON,
  }
}

export function callMarkLessonComplete(id) {
  const url = `${API_URL}lessons/${id}/completed`
  return (dispatch, getState) => {
    if (selectors.isLoggedIn(getState()) || true) {
      return fetch(url, {
        method: 'POST',
        credentials: 'include',
      })
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

export function setLessonAsComplete(isComplete = true) {
  return {
    type: SET_LESSON_AS_COMPLETE,
    payload: { isComplete },
  }
}

export function updateLessonById(id, payload) {
  const url = `${API_URL}lessons/${id}`

  return () => fetch(url, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...payload,
    }),
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(() => {
      toast.success('Saved')
      return { isSuccess: true }
    })
    .catch(error => parseJSON(error)
      .then((error) => {
        toast.error(error.error.message)
        return { isSuccess: false }
      }))
}

export function addLesson(payload) {
  const url = `${API_URL}lessons`

  return () => fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...payload,
    }),
  })
    .then(checkStatus)
    .then(parseJSON)
    .then((json) => {
      toast.success('Saved')
      return {
        ...json,
        isSuccess: true,
      }
    })
    .catch(error => parseJSON(error)
      .then((error) => {
        toast.error(error.error.message)
        return { isSuccess: false }
      }))
}
