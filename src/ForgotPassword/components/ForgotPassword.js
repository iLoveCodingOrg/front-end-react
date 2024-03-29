import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import { Input } from '../../Controls'
import { validateField } from '../../_app/utils'
import WrapMini from '../../WrapMini'
import { actions } from '..'

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      error: false,
      email: {
        value: 'error',
        error: true,
      },
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.renderInlineError = this.renderInlineError.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    this.setState({ isLoading: true }, () => {
      this.props.callForgotPassword(this.state.email.value)
        .then((response) => {
          if (response.isSuccess) {
            this.setState({
              error: false,
              isLoading: false,
            })
          } else {
            this.setState({
              error: response.message,
              isLoading: false,
            })
          }
        })
    })
  }

  handleEmail(event) {
    const { value } = event.target
    this.setState({
      email: {
        value,
        error: validateField(value, { isRequired: true, isEmail: true }),
      },
    })
  }

  renderInlineError(fieldName) {
    const { error } = this.state[fieldName]

    if (error) {
      return (
        <div className="invalid-feedback" style={{ display: 'block' }}>
          {error}
        </div>
      )
    }
    return null
  }

  renderError() {
    const { error } = this.state
    if (error) {
      return (
        <div className="card card-danger">
          {error}
        </div>
      )
    }
    return null
  }

  render() {
    return (
      <WrapMini>
        <Helmet><title>Forgot password? - iLoveCoding</title></Helmet>
        <form className="form-forgot-password" onSubmit={this.handleSubmit} noValidate>
          <h2 className="t-center">Forgot Password?</h2>
          <p>Please enter your email to search for your account.</p>
          {this.renderError()}
          <div>
            <Input
              label="Email address"
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
              autoFocus
              required
              onChange={this.handleEmail}
            />
            {this.renderInlineError('email')}
          </div>
          <div>
            <input
              disabled={this.state.isLoading || this.state.email.error}
              className="my-1 btn btn-lg btn-primary btn-block"
              type="submit"
              value={(this.state.isLoading) ? 'Loading...' : 'Get new password'}
            />
          </div>
          <div className="t-center">
            <Link to="/login">
              <span role="img" aria-label="Back arrow emoji"> 🔙</span>
              {' '}
              Back to login
            </Link>
          </div>
        </form>
      </WrapMini>
    )
  }
}

ForgotPassword.propTypes = {
  callForgotPassword: PropTypes.func.isRequired,
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    callForgotPassword: email => dispatch(actions.callForgotPassword(email)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPassword)
