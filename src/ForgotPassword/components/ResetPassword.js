import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import WrapMini from '../../WrapMini'
import { actions } from '..'

class ResetPassword extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      isPasswordMatch: true,
      error: false,
      isLoading: false,
    }

    this.renderError = this.renderError.bind(this)
    this.renderPasswordMatchError = this.renderPasswordMatchError.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this)
    this.handleCallResetPassword = this.handleCallResetPassword.bind(this)
  }

  handleCallResetPassword() {
    const { accessToken } = this.props.match.params
    const { email, password } = this.state

    this.setState({ isLoading: true }, () => {
      this.props.callResetPassword(accessToken, email, password)
        .then((response) => {
          if (response.isSuccess) {
            this.props.history.push('/login')
            this.setState({ isLoading: false })
          } else {
            this.setState({
              error: response.message,
              isLoading: false,
            })
          }
        })
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.handleCallResetPassword()
  }

  handleEmail(event) {
    const val = event.target.value
    this.setState({ email: val })
  }

  handlePassword(event) {
    const val = event.target.value
    const isPasswordMatch = val === this.state.confirmPassword
    this.setState({
      password: val,
      isPasswordMatch,
    })
  }

  handleConfirmPassword(event) {
    const val = event.target.value
    const isPasswordMatch = val === this.state.password
    this.setState({
      confirmPassword: val,
      isPasswordMatch,
    })
  }

  renderPasswordMatchError() {
    if (!this.state.isPasswordMatch) {
      return (
        <div className="invalid-feedback" style={{ display: 'block' }}>
          Password does not match.
        </div>
      )
    }
  }

  renderError() {
    const { error } = this.state
    if (error) {
      return (
        <div className="alert alert-danger">
          {error}
        </div>
      )
    }
    return null
  }

  render() {
    const { isLoading, isPasswordMatch } = this.state
    return (
      <WrapMini>
        <Helmet><title>Reset password - iLoveCoding</title></Helmet>
        <div className="container">
          <div className="row">
            <div className="offset-md-2 offset-lg-3">
              <h2 className="text-center">Reset Password</h2>
              <hr />
              <form onSubmit={this.handleSubmit}>
                {this.renderError()}
                <div className="form-group row">
                  <label htmlFor="email">Confirm Email</label>
                  <div>
                    <input
                      id="email"
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Confirm Email"
                      onChange={this.handleEmail}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="password">New Password</label>
                  <div>
                    <input
                      id="password"
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Enter new password"
                      onChange={this.handlePassword}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="confirmPassword">
                    Confirm New Password
                  </label>
                  <div>
                    <input
                      id="confirmPassword"
                      className="form-control"
                      type="password"
                      name="confirmPassword"
                      placeholder="Re-enter new password"
                      onChange={this.handleConfirmPassword}
                      required
                    />
                    {this.renderPasswordMatchError()}
                  </div>
                </div>
                <input
                  disabled={isLoading || !isPasswordMatch}
                  className="btn btn-lg btn-primary btn-block"
                  type="submit"
                  value={(isLoading) ? 'Loading...' : 'Set New Password'}
                />
              </form>
            </div>
          </div>
        </div>
      </WrapMini>
    )
  }
}

ResetPassword.propTypes = {
  callResetPassword: PropTypes.func.isRequired,
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    callResetPassword: (accessToken, email, password) => dispatch(actions.callResetPassword(accessToken, email, password)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPassword)
