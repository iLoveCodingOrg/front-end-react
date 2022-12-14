import React from 'react'
import { validateField } from '../../_app/utils'

class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleLastName = this.handleLastName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.renderLogoutOption = this.renderLogoutOption.bind(this)
    this.renderInlineError = this.renderInlineError.bind(this)
  }

  handleFirstName(event) {
    const value = event.target.value
    const options = {
      isRequired: true,
    }

    this.props.setUserInfo({
      ...this.props.userInfo,
      firstName: {
        value,
        error: validateField(value, options),
      },
    })
  }

  handleLastName(event) {
    const value = event.target.value
    const options = {
      isRequired: true,
    }

    this.props.setUserInfo({
      ...this.props.userInfo,
      lastName: {
        value,
        error: validateField(value, options),
      },
    })
  }

  handleEmail(event) {
    const value = event.target.value
    const options = {
      isRequired: true,
      isEmail: true,
    }

    this.props.setUserInfo({
      ...this.props.userInfo,
      email: {
        value,
        error: validateField(value, options),
      },
    })
  }

  renderLogoutOption() {
    const { isDisabled, logout, userInfo } = this.props

    if (isDisabled) {
      return (
        <div className="mb-1">
          Not
          {' '}
          {userInfo.firstName.value}
          ?
          <button className="b-0 btn-link" onClick={logout}>Log out</button>
        </div>
      )
    }
    return null
  }

  renderInlineError(fieldName) {
    const error = this.props.userInfo[fieldName].error

    if (error) {
      return (
        <div className="invalid-feedback" style={{ display: 'block' }}>
          {error}
        </div>
      )
    }
    return null
  }

  render() {
    const { isDisabled, userInfo } = this.props
    const { firstName, lastName, email } = userInfo
    return (
      <div>
        <h4 className="mb-1">Contact Information</h4>
        {this.renderLogoutOption()}
        <div>
          <div className="mb-1">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              value={firstName.value}
              onChange={this.handleFirstName}
              className="form-control"
              placeholder="First Name"
              disabled={isDisabled}
              required
            />
            {this.renderInlineError('firstName')}
          </div>

          <div className="mb-1">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              value={lastName.value}
              onChange={this.handleLastName}
              className="form-control"
              placeholder="Last Name"
              disabled={isDisabled}
              required
            />
            {this.renderInlineError('lastName')}
          </div>
        </div>

        <div className="mb-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email.value}
            onChange={this.handleEmail}
            className="form-control"
            placeholder="your@email.com"
            disabled={isDisabled}
            required
          />
          {this.renderInlineError('email')}
        </div>
      </div>
    )
  }
}

export default UserForm
