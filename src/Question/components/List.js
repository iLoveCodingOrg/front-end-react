import React from 'react'
import { connect } from 'react-redux'

import { getQuestions, clearQuestions } from '../actions'
import { List } from '../../_common'

function ListHeader() {
  return (
    <div className="flex flex-column align-items-center">
      <h1>Questions &amp; Answers</h1>
      <h3 className="f-300 align-self-center t-center">
        To the point answers for every step of the way of your journey!
      </h3>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    error: state.questions.list.error,
    isLoading: state.questions.list.isLoading,
    list: state.questions.list.data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getList: () => {
      dispatch(getQuestions())
    },
    clearList: () => {
      dispatch(clearQuestions())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => (
  <List
    {...props}
    of="question"
    listHeader={ListHeader}
  />
))
