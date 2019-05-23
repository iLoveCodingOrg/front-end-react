import React from 'react'
import { connect } from 'react-redux'

import { getPageBySlug, clearPage } from '../actions'
import { View } from '../../_common'

function mapStateToProps(state) {
  return {
    error: state.pages.view.error,
    isLoading: state.pages.view.isLoading,
    view: state.pages.view.data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getView: (slug) => {
      dispatch(getPageBySlug(slug))
    },
    clearView: () => {
      dispatch(clearPage())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => <View {...props} of="page" />)
