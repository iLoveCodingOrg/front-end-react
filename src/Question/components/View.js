import React from 'react'
import { connect } from 'react-redux'

import { callMarkQuestionComplete, getQuestionBySlug, clearQuestion } from '../actions'
import { View } from '../../_common'

function mapStateToProps(state) {
  return {
    error: state.questions.view.error,
    isLoading: state.questions.view.isLoading,
    view: state.questions.view.data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    callMarkAsComplete: (id) => {
      dispatch(callMarkQuestionComplete(id))
    },
    getView: (slug) => {
      dispatch(getQuestionBySlug(slug))
    },
    clearView: () => {
      dispatch(clearQuestion())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => <View {...props} of="question" />)
