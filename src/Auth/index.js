import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withOffer } from '../Offer'

import { actions } from '../_user'

function Auth({ getUser, children }) {
  useEffect(() => {
    getUser()
  }, [])

  return children
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: () => {
      dispatch(actions.getUser())
    },
  }
}

// export default Auth
export default withOffer(withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth)))
