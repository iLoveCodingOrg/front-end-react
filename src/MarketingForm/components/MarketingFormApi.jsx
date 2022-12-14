import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Input, useInput } from '../../Controls'
import { callSubscribeToCRM } from '../../_user/actions'
import { LENGTH_OF_OFFER } from '../../_app/constants'

function MarketingFormApi({
  submitButtonText = 'Submit',
  enableFirstName = true,
  enableLastName = true,
  location,
  subscribeToCRM,
  history,
  newSignupSuccessPage,
  existingSignupSuccessPage,
  offerLength,
}) {
  const [email, setEmail] = useInput('')
  const [firstName, setFirstName] = useInput('')
  const [lastName, setLastName] = useInput('')
  const [didSubmit, setDidSubmit] = useState(false)
  // const [formError, setFormError] = useState(null)

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setDidSubmit(true)
    if (email && firstName) {
      const {
        isSuccess, isUserNew, status, timestampOptin,
      } = await subscribeToCRM({
        email, firstName, lastName, location,
      })
      if (isSuccess) {
        const successPage = (status === 'pending') ? newSignupSuccessPage : existingSignupSuccessPage
        history.push(`${successPage}?t=${timestampOptin}&l=${offerLength}`)
      }
    }
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <Input
          autoFocus
          className="mb-1"
          placeholder="Email Address"
          type="email"
          name="Email"
          id="mk-email"
          value={email}
          onChange={setEmail}
          inlineMessage={didSubmit && !email && 'Email is required'}
        />
        { enableFirstName && (
        <>
          <Input
            className="mb-1"
            placeholder="First Name"
            type="text"
            name="First Name"
            id="mk-fname"
            className="mb-1"
            value={firstName}
            onChange={setFirstName}
            inlineMessage={didSubmit && !firstName && 'First Name is required'}
          />
        </>
        )}
        { enableLastName && (
        <>
          <Input
            className="mb-1"
            placeholder="Last Name"
            type="text"
            name="Last Name"
            id="mk-lname"
            value={lastName}
            onChange={setLastName}
            inlineMessage={didSubmit && !lastName && 'Last name is required'}
          />
        </>
        )}
        <div>
          <input
            type="submit"
            value={submitButtonText}
            name="subscribe"
            className="btn btn-primary btn-block"
          />
        </div>
      </div>
    </form>
  )
}

MarketingFormApi.defaultProps = {
  newSignupSuccessPage: '/pages/thanks-webinar-signup',
  existingSignupSuccessPage: '/webinar/play',
  offerLength: LENGTH_OF_OFFER,
}

function mapStateToProps(state) {
  return { location: state.user.location }
}

function mapDispatchToProps(dispatch) {
  return {
    subscribeToCRM: data => dispatch(callSubscribeToCRM(data)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MarketingFormApi))
