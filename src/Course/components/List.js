import React from 'react'
import { connect } from 'react-redux'

import { getCourses, clearCourses } from '../actions'
import { List } from '../../_common'

function ListHeader() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Courses</h1>
      <h3 className="f-300 col-lg-9 align-self-center">
        Courses are organized into targeted technological topics. Pick a course and get started. Remember! Each course uses simple terminology, and gives you ample practice so your learning sinks in on a deeper level.
      </h3>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    error: state.courses.list.error,
    isLoading: state.courses.list.isLoading,
    list: state.courses.list.data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getList: () => {
      dispatch(getCourses())
    },
    clearList: () => {
      dispatch(clearCourses())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => (
  <List
    {...props}
    of="course"
    listHeader={ListHeader}
  />
))
