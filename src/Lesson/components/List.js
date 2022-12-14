import React from 'react'
import { connect } from 'react-redux'

import { getLessons, clearLessons } from '../actions'
import { List } from '../../_common'

function ListHeader() {
  return (
    <div className="flex flex-column align-items-center">
      <h1>All Lessons</h1>
      <h3 className="f-300 align-self-center">
        Individual lessons that roll-up to courses.
      </h3>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    error: state.lessons.list.error,
    isLoading: state.lessons.list.isLoading,
    list: state.lessons.list.data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getList: () => {
      dispatch(getLessons())
    },
    clearList: () => {
      dispatch(clearLessons())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => (
  <List
    {...props}
    of="lesson"
    listHeader={ListHeader}
  />
))
