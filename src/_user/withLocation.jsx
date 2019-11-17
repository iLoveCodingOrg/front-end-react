import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getLocation } from './actions'

export default function withLocation(Component) {
  function WrappedComponent({ hasLocation, getLocationFn, ...props }) {
    useEffect(() => {
      if (!hasLocation) {
        getLocationFn()
      }
    }, [hasLocation])

    return <Component {...props} />
  }

  function mapStateToProps(state) {
    return { hasLocation: !!state.user.location.ip }
  }

  function mapDispatchToProps(dispatch) {
    return { getLocationFn: () => dispatch(getLocation()) }
  }

  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent)
}
