import 'whatwg-fetch'
import { toast } from 'react-toastify'
import {
  SET_PAGES,
  CLEAR_PAGES,
  SET_PAGE,
  CLEAR_PAGE,
  SET_PAGE_LOADING,
  SET_PAGES_LIST_LOADING,
} from '../_app/actionTypes'
import { API_URL } from '../_app/constants'
import {
  checkStatus,
  parseJSON,
} from '../_app/utils'

export function setLoadingView(isLoading = true) {
  return {
    type: SET_PAGE_LOADING,
    payload: {
      isLoading,
    },
  }
}

export function setLoadingList(isLoading = true) {
  return {
    type: SET_PAGES_LIST_LOADING,
    payload: {
      isLoading,
    },
  }
}

export function getPages() {
  const url = `${API_URL}pages`

  return (dispatch) => {
    dispatch(setLoadingList(false))

    return fetch(url, { credentials: 'include' })
      .then(checkStatus)
      .then(parseJSON)
      .then((json) => {
        dispatch(setPages(null, json))
      })
      .catch((error) => {
        dispatch(setPages(error))
      })
  }
}

export function setPages(error = null, data) {
  const action = {
    type: SET_PAGES,
  }

  if (error) {
    toast.error('Something went wrong! Could not load the pages')

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

export function clearPages() {
  return {
    type: CLEAR_PAGES,
  }
}

export function getPageBySlug(slug) {
  const url = `${API_URL}pages/${slug}/data`

  return (dispatch) => {
    dispatch(setLoadingView(true))

    return fetch(url, { credentials: 'include' })
      .then(checkStatus)
      .then(parseJSON)
      .then((json) => {
        dispatch(setPage(null, json))
      })
      .catch((err) => {
        dispatch(setPage(err))
      })
  }
}

export function setPage(error = null, data) {
  const action = {
    type: SET_PAGE,
  }

  if (error) {
    toast.error('Something went wrong! Could not load the page')

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

export function clearPage() {
  return {
    type: CLEAR_PAGE,
  }
}

export function updatePageById(id, payload) {
  const url = `${API_URL}pages/${id}`

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

export function addPage(payload) {
  const url = `${API_URL}pages`

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
