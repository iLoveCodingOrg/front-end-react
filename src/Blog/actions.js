import { toast } from 'react-toastify'
import 'whatwg-fetch'
import {
  CLEAR_BLOG,
  CLEAR_BLOGS,
  SET_BLOG,
  SET_BLOG_LOADING,
  SET_BLOGS,
  SET_BLOGS_LIST_LOADING,
} from '../_app/actionTypes'
import { API_URL } from '../_app/constants'
import BlogsData from '../_app/data/Blog.json'
import {
  checkStatus,
  parseJSON,
} from '../_app/utils'

export function setLoadingView(isLoading = true) {
  return {
    type: SET_BLOG_LOADING,
    payload: {
      isLoading,
    },
  }
}

export function setLoadingList(isLoading = true) {
  return {
    type: SET_BLOGS_LIST_LOADING,
    payload: {
      isLoading,
    },
  }
}

export function getBlogs() {
  return (dispatch) => {
    dispatch(setLoadingList(true))

    try {
      dispatch(setBlogs(null, BlogsData))
    } catch (error) {
      dispatch(setBlogs(error))
    }
  }
}

export function setBlogs(error = null, data) {
  const action = {
    type: SET_BLOGS,
  }

  if (error) {
    toast.error('Something went wrong! Could not load the blogs')

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

export function clearBlogs() {
  return {
    type: CLEAR_BLOGS,
  }
}

export function getBlogBySlug(slug) {
  return (dispatch) => {
    dispatch(setLoadingView(true))

    try {
      const blog = BlogsData.find(b => b.slug === slug)
      dispatch(setBlog(null, blog))
    } catch (err) {
      dispatch(setBlog(err))
    }
  }
}

export function setBlog(error = null, data) {
  const action = {
    type: SET_BLOG,
  }

  if (error) {
    toast.error('Something went wrong! Could not load the blog')

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

export function clearBlog() {
  return {
    type: CLEAR_BLOG,
  }
}

export function updateBlogById(id, payload) {
  const url = `${API_URL}blogs/${id}`

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

export function addBlog(payload) {
  const url = `${API_URL}blogs`

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
