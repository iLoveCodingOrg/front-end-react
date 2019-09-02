import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { qsParse } from '../../_app/utils'

import { Recaptcha2 } from '../../Recaptcha'
import WrapMini from '../../WrapMini'
import { actions } from '../../_user'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recaptchaToken: '',
      email: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.renderError = this.renderError.bind(this)
    this.renderVerifyEmailStatus = this.renderVerifyEmailStatus.bind(this)
    this.handleVerifyEmail = this.handleVerifyEmail.bind(this)
    this.verifyRecaptchaCb = this.verifyRecaptchaCb.bind(this)
    this.setRecaptchaElem = this.setRecaptchaElem.bind(this)
  }

  componentDidMount() {
    this.props.clearError()
  }

  setRecaptchaElem(recaptchaElm) {
    this.recaptchaElm = recaptchaElm
  }

  verifyRecaptchaCb(recaptchaToken) {
    this.setState({ recaptchaToken })
  }

  handleSubmit(event) {
    event.preventDefault()

    const { location, history, login } = this.props
    const { redirect } = qsParse(location.search)
    const { email, password, recaptchaToken } = this.state
    login(email, password, recaptchaToken)
      .then(({ isSuccess }) => {
        if (isSuccess) {
          if (redirect) {
            history.push(redirect)
          } else {
            history.push('/dashboard')
          }
        } else if (this.recaptchaElm) {
          this.recaptchaElm.reset()
          this.setState({ recaptchaToken: '' })
        }
      })
  }

  handleChange(fieldName, newValue) {
    this.setState({
      [fieldName]: newValue,
    })
  }

  handleVerifyEmail(event) {
    event.preventDefault()

    this.props.callSendVerifyEmail(this.state.email)
  }

  renderVerifyEmailStatus() {
    const { verifyEmailStatus } = this.props
    if (verifyEmailStatus) {
      return (
        <div className="alert alert-success">
          {this.props.verifyEmailStatus}
        </div>
      )
    }
    return null
  }

  renderError() {
    const { error } = this.props
    const isEmailToBeVerified = (error === 'Login failed as the email has not been verified')
    if (error) {
      return (
        <div className="alert alert-danger">
          {this.props.error}
          {' '}
          {
            isEmailToBeVerified && (
              <button
                type="button"
                onClick={this.handleVerifyEmail}
                className="btn-link p-0 border-0"
              >
                Resend verification email
              </button>
            )
          }
        </div>
      )
    }
    return null
  }

  render() {
    return (
      <WrapMini>
        <Helmet><title>Login - iLoveCoding</title></Helmet>
        <form className="form-login" onSubmit={this.handleSubmit}>
          <h2 className="t-center">Log in to iLoveCoding</h2>
          <p className="t-center">
            Don&apos;t have an account?
            {' '}
            <Link to="/pricing">Get started</Link>
            {' '}
            or enrolled in
            {' '}
            <Link to="/pricing">iLoveCoding&apos;s Paid Programs.</Link>
          </p>
          {this.renderVerifyEmailStatus()}
          {this.renderError()}
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              name="email"
              type="email"
              className="form-control form-control-lg"
              placeholder="Email address"
              autoFocus
              required
              onChange={event => this.handleChange('email', event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              name="password"
              type="password"
              className="form-control form-control-lg"
              placeholder="Password"
              required
              onChange={event => this.handleChange('password', event.target.value)}
            />
          </div>
          <Recaptcha2
            onLoadCb={this.setRecaptchaElem}
            verifyTokenCb={this.verifyRecaptchaCb}
          />
          <div>
            <input
              disabled={this.props.isLoading}
              type="submit"
              name="Login"
              value={this.props.isLoading ? 'Logging in ...' : 'Login'}
              className="my-1 btn btn-lg btn-primary btn-block"
            />
          </div>
          <p className="t-center">
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>
        </form>
      </WrapMini>
    )
  }
}

Login.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  isLoading: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  verifyEmailStatus: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
  return {
    error: state.user.error,
    isLoading: state.user.isLoading,
    verifyEmailStatus: state.user.verifyEmailStatus,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clearError: () => dispatch(actions.clearError()),
    login: (email, password, recaptchaToken) => dispatch(actions.login(email, password, recaptchaToken)),
    callSendVerifyEmail: email => dispatch(actions.callSendVerifyEmail(email)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Login))
