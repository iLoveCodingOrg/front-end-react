import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import Breadcrumbs from '../../Breadcrumbs'

import callChangePassword from '../actions'

class ChangePassword extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      isPasswordMatch: true,
      error: false,
      isLoading: false,
    }

    this.renderError = this.renderError.bind(this)
    this.renderPasswordMatchError = this.renderPasswordMatchError.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCallChangePassword = this.handleCallChangePassword.bind(this)

    this.handleCurrentPassword = this.handleCurrentPassword.bind(this)
    this.handleNewPassword = this.handleNewPassword.bind(this)
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this)
  }

  handleCallChangePassword() {
    const { currentPassword, newPassword } = this.state

    this.setState({ isLoading: true }, () => {
      this.props.callChangePassword(currentPassword, newPassword)
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
    this.handleCallChangePassword()
  }

  handleCurrentPassword(event) {
    const val = event.target.value
    this.setState({ currentPassword: val })
  }

  handleNewPassword(event) {
    const val = event.target.value
    const isPasswordMatch = val === this.state.confirmPassword
    this.setState({
      newPassword: val,
      isPasswordMatch,
    })
  }

  handleConfirmPassword(event) {
    const val = event.target.value
    const isPasswordMatch = val === this.state.newPassword
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
    const title = 'Change Password'
    return (
      <div className="flex flex-column">
        <Helmet title={`${title} - iLoveCoding`} />
        <section className="
                    align-self-center
                    container
                    mt-1
                    mb-3"
        >
          <Breadcrumbs nodes={[
            {
              label: 'Back to Dashboard',
              link: '/dashboard',
            },
            {
              label: title,
            },
          ]}
          />
          <div className="row">
            <div>
              <h1>{title}</h1>
            </div>
          </div>
          <hr className="mb--25" />
          <div className="row">
            <form className="mt-2 " onSubmit={this.handleSubmit}>
              {this.renderError()}
              <div className="form-group row">
                <label htmlFor="email">Current Password</label>
                <div>
                  <input
                    className="form-control"
                    type="password"
                    name="current-password"
                    placeholder="Current Password"
                    onChange={this.handleCurrentPassword}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="password">New Password</label>
                <div>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Enter new password"
                    onChange={this.handleNewPassword}
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
                disabled={this.state.isLoading || !this.state.isPasswordMatch}
                className="btn btn-lg btn-primary btn-block"
                type="submit"
                value={(this.state.isLoading) ? 'Loading...' : 'Set New Password'}
              />
            </form>
          </div>
        </section>
      </div>
    )
  }
}

ChangePassword.propTypes = {
  callChangePassword: PropTypes.func.isRequired,
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    callChangePassword: (currentPassword, newPassword) => dispatch(callChangePassword(currentPassword, newPassword)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangePassword)
