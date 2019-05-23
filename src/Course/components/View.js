import React from 'react'
import { connect } from 'react-redux'

import { callMarkCourseComplete, getCourseBySlug, clearCourse } from '../actions'
import { View, RedirectAlert } from '../../_common'
import CourseNav from './CourseNav'

function mapStateToProps(state) {
  return {
    error: state.courses.view.error,
    isLoading: state.courses.view.isLoading,
    view: state.courses.view.data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    callMarkAsComplete: (id) => {
      dispatch(callMarkCourseComplete(id))
    },
    getView: (slug) => {
      dispatch(getCourseBySlug(slug))
    },
    clearView: () => {
      dispatch(clearCourse())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => (
  <View {...props} of="course">
    <RedirectAlert slug={props.view.slug} />
    <CourseNav
      activeLessonIndex={-1}
      course={props.view}
    />
  </View>
))
