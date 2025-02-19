import { toast } from 'react-toastify'
import 'whatwg-fetch'
import {
  CLEAR_COURSE,
  CLEAR_COURSES,
  SET_COURSE,
  SET_COURSE_LOADING,
  SET_COURSES,
  SET_COURSES_LIST_LOADING,
} from '../_app/actionTypes'
import { API_URL } from '../_app/constants'
import CoursesData from '../_app/data/Course.json'
import LessonsData from '../_app/data/Lesson.json'
import {
  checkStatus,
  parseJSON,
} from '../_app/utils'

export function setLoadingView(isLoading = true) {
  return {
    type: SET_COURSE_LOADING,
    payload: {
      isLoading,
    },
  }
}

export function setLoadingList(isLoading = true) {
  return {
    type: SET_COURSES_LIST_LOADING,
    payload: {
      isLoading,
    },
  }
}

export function setCourses(error = null, data) {
  const action = {
    type: SET_COURSES,
  }

  if (error) {
    toast.error('Something went wrong! Could not load the courses')

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

export function setCourse(error = null, data) {
  const action = {
    type: SET_COURSE,
  }

  if (error) {
    toast.error('Something went wrong! Could not load the course')

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

export function getCourses(type) {
  let filter = {}

  if (type === 'project') {
    filter = { where: { topic: 'Project' } }
  } else if (type === 'core') {
    filter = { where: { topic: 'Core Training' } }
  }

  return (dispatch) => {
    dispatch(setLoadingList(true))

    try {
      const filteredCourses = CoursesData.filter((course) => {
        if (filter.where && filter.where.topic) {
          return course.topic.includes(filter.where.topic)
        }
        return true
      })
      dispatch(setCourses(null, filteredCourses))
    } catch (error) {
      dispatch(setCourses(error))
    }
  }
}

export function clearCourses() {
  return {
    type: CLEAR_COURSES,
  }
}

const getLessonObjByLessonId = (lessonId) => {
  const lesson = LessonsData.find(lesson => lesson._id === lessonId)
  if (lesson) {
    return {
      title: lesson.title,
      slug: lesson.slug,
      duration: lesson.duration,
      access: lesson.access,
      isComplete: lesson.isComplete,
    }
  }
  return {}
}

export function getCourseBySlug(slug) {
  return (dispatch) => {
    dispatch(setLoadingView(true))

    try {
      const course = CoursesData.find(course => course.slug === slug)
      if (course) {
        const lessonsObj = course.lesson.map(lessonId => getLessonObjByLessonId(lessonId))
        const updatedCourse = { ...course, lesson: lessonsObj }
        dispatch(setCourse(null, updatedCourse))
      } else {
        throw new Error('Course not found')
      }
    } catch (error) {
      dispatch(setCourse(error))
    }
  }
}

export function clearCourse() {
  return {
    type: CLEAR_COURSE,
  }
}

export function callMarkCourseComplete(id) {
  const url = `${API_URL}courses/${id}/completed`

  return () => fetch(url, {
    method: 'POST',
    credentials: 'include',
  })
    .then(checkStatus)
    .then(parseJSON)
    .then((json) => {
    })
    .catch((error) => {
    })
}

export function updateCourseById(id, payload) {
  const url = `${API_URL}courses/${id}`

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

export function addCourse(payload) {
  const url = `${API_URL}courses`

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
