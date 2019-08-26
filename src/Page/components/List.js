import React from 'react'
import { connect } from 'react-redux'

import { getPages, clearPages } from '../actions'
import { List } from '../../_common'

function ListHeader() {
  return (
    <div className="flex flex-column align-items-center">
      <h1>All Pages</h1>
      <h3 className="f-300 align-self-center">
        List of all the pages
      </h3>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    error: state.pages.list.error,
    isLoading: state.pages.list.isLoading,
    list: state.pages.list.data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getList: () => {
      dispatch(getPages())
    },
    clearList: () => {
      dispatch(clearPages())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => (
  <List
    {...props}
    of="page"
    listHeader={ListHeader}
  />
))
