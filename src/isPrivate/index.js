import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectors } from '../_user'

export default function (WrappedComponent) {
  function PrivateComponent(props) {
    if (props.isLoggedIn) {
      return <WrappedComponent {...props} />
    }
    return (
      <div className="container flex justify-content-center">
        <div>
          <div className="alert alert-info">
            You must be logged in to view this page!
            {' '}
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    )
  }

  function mapStateToProps(state) {
    return {
      isLoggedIn: selectors.isLoggedIn(state),
    }
  }

  return connect(mapStateToProps)(PrivateComponent)
}
