import React from 'react'
import { connect } from 'react-redux'
import { selectors } from '../_user'
import FallbackUI from './components/FallbackUI'

export default function (WrappedComponent, showIfLoggedIn = true, FallbackMessage) {
  function PrivateComponent(props) {
    const shouldShow = showIfLoggedIn ? props.isLoggedIn : !props.isLoggedIn
    if (shouldShow) {
      return <WrappedComponent {...props} />
    }
    return (
      <>
        {FallbackMessage && FallbackMessage}
        {!FallbackMessage && <FallbackUI />}
      </>
    )
  }

  function mapStateToProps(state) {
    return {
      isLoggedIn: selectors.isLoggedIn(state),
    }
  }

  return connect(mapStateToProps)(PrivateComponent)
}
