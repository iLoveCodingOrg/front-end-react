import React from 'react'
import { connect } from 'react-redux'
import { qsParse } from '../../_app/utils'

import Loading from '../../Loading'
import * as actions from '../actions'

class VerifyEmail extends React.Component {
  componentDidMount() {
    const { callVerifyEmail, location, history } = this.props
    const queryString = qsParse(location.search)
    callVerifyEmail(queryString.uid, queryString.token)
      .then((response) => {
        if (response.isSuccess) {
          history.push('/login')
        }
      })
  }

  componentDidUpdate(prevProps) {
    const { callVerifyEmail, location, history } = this.props
    const queryString = qsParse(location.search)
    const prevQueryString = qsParse(prevProps.location.search)

    if (
      prevQueryString.uid !== queryString.uid
      || prevQueryString.token !== queryString.token
    ) {
      callVerifyEmail(queryString.uid, queryString.token)
        .then((response) => {
          if (response.isSuccess) {
            history.push('/login')
          }
        })
    }
  }

  render() {
    const { isLoading, error } = this.props
    return (
      <div>
        { isLoading && <Loading /> }
        { !isLoading && error && <div className="card card-danger">{error}</div> }
        { !isLoading && !error && <div>Verifiying your email...</div>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    error: state.verifyEmail.error,
    isLoading: state.verifyEmail.isLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    callVerifyEmail: (uid, token) => dispatch(actions.callVerifyEmail(uid, token)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VerifyEmail)
