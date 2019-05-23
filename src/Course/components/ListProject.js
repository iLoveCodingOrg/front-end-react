import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import { getCourses, clearCourses } from '../actions'
import { List } from '../../_common'

function ListHeader() {
  return (
    <div className="d-flex flex-column align-items-center">
      <Helmet><title>Practice Projects - iLoveCoding</title></Helmet>
      <h1>Practice Projects</h1>
      <p className="lead col-lg-9 align-self-center">
                In this section you will build real-world projects. Here you get ample practice on applying your skills that you got from the
        {' '}
        <Link to="/courses/core">Core Training</Link>
. With practice, your knowledge will sink in on a deeper level and your confidence will grow.
      </p>
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
      dispatch(getCourses('project'))
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
