import React from 'react'
import { connect } from 'react-redux'

import { getBlogs, clearBlogs } from '../actions'
import { List } from '../../_common'

function ListHeader() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>iLoveCoding Blog</h1>
      <p className="lead col-lg-9 align-self-center text-center">
        Here I share my story, insights and experience on my path to becoming a self-taught software developer. Additionally I also share updates on iLoveCoding and food for thought for students.
      </p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    error: state.blogs.list.error,
    isLoading: state.blogs.list.isLoading,
    list: state.blogs.list.data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getList: () => {
      dispatch(getBlogs())
    },
    clearList: () => {
      dispatch(clearBlogs())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => (
  <List
    {...props}
    of="blog"
    listHeader={ListHeader}
  />
))
