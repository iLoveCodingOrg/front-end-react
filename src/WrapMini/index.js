import './style.css'

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { actions, selectors } from '../_user'
import logo from '../_app/images/ilovecoding-logo.svg'
import { Copyrights } from '../Footer'

function WrapMini({
  isLoggedIn, firstName, logout, children,
}) {
  return (
    <div className="bg-gray-lightest full-screen">
      <div className="flex justify-content-center navbar-brand py-1">
        <Link to="/" className="img-wrap">
          <img src={logo} alt="iLoveCoding.org Logo" />
        </Link>
      </div>
      {isLoggedIn ? (
        <div className="t-center">
          <h2>
            Hi
            {' '}
            {firstName}
            !
            <br />
          </h2>
          <p>
            You are already logged in,
            {' '}
            <Link to="/dashboard">continue to dashboard</Link>
            .
            <br />
            Not you?
            {' '}
            <button
              type="button"
              className="border-0 btn-link p-0"
              onClick={logout}
            >
              Log out
            </button>
          </p>
        </div>
      ) : (
        children
      )}
      <Copyrights className="t-center" />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isLoggedIn: selectors.isLoggedIn(state),
    firstName: state.user.firstName,
    lastName: state.user.lastName,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(actions.logout()).then(({ isSuccess }) => {
      if (isSuccess) {
        window.location.reload()
      }
    }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrapMini)
