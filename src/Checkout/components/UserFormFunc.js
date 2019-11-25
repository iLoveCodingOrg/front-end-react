import React from 'react'
import { Input } from '../../Controls'
import { validateField } from '../../_app/utils'

function UserForm({
  setUserInfo, userInfo, isDisabled, logout,
}) {
  const { firstName, lastName, email } = userInfo

  const handleFirstName = (event) => {
    const { value } = event.target
    const options = {
      isRequired: true,
    }

    setUserInfo({
      ...userInfo,
      firstName: {
        value,
        error: validateField(value, options),
      },
    })
  }

  const handleLastName = (event) => {
    const { value } = event.target
    const options = {
      isRequired: true,
    }

    setUserInfo({
      ...userInfo,
      lastName: {
        value,
        error: validateField(value, options),
      },
    })
  }

  const handleEmail = (event) => {
    const { value } = event.target
    const options = {
      isRequired: true,
      isEmail: true,
    }

    setUserInfo({
      ...userInfo,
      email: {
        value,
        error: validateField(value, options),
      },
    })
  }

  const renderLogoutOption = () => {
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

  const renderInlineError = (fieldName) => {
    const { error } = userInfo[fieldName]

    if (error) {
      return (
        <div className="invalid-feedback" style={{ display: 'block' }}>
          {error}
        </div>
      )
    }
    return null
  }

  return (
    <div>
      <h4 className="mb-1">Contact Information</h4>
      {renderLogoutOption()}
      <div>
        <div className="mb-1">
          <Input
            type="text"
            id="firstName"
            name="First Name"
            value={firstName.value}
            onChange={handleFirstName}
            placeholder="First Name"
            disabled={isDisabled}
            required
          />
          {renderInlineError('firstName')}
        </div>

        <div className="mb-1">
          <Input
            type="text"
            id="lastName"
            name="Last Name"
            value={lastName.value}
            onChange={handleLastName}
            placeholder="Last Name"
            disabled={isDisabled}
            required
          />
          {renderInlineError('lastName')}
        </div>
      </div>

      <div className="mb-1">
        <Input
          type="email"
          id="email"
          name="Email"
          value={email.value}
          onChange={handleEmail}
          placeholder="your@email.com"
          disabled={isDisabled}
          required
        />
        {renderInlineError('email')}
      </div>
    </div>
  )
}

export default UserForm
