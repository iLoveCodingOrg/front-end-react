import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { selectors, actions } from '../_user'
import FallbackUI from './components/FallbackUI'

export default function (WrappedComponent, showOnlyIfLoggedIn = true, FallbackMessage) {
  function PrivateComponent({ getUser, isLoggedIn, ...props }) {
    useEffect(() => {
      getUser()
    }, [])

    const shouldShow = showOnlyIfLoggedIn ? isLoggedIn : true

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

  function mapDispatchToProps(dispatch) {
    return {
      getUser: () => {
        dispatch(actions.getUser())
      },
    }
  }

  // return connect(mapStateToProps)(PrivateComponent)
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PrivateComponent)
}
