import React from 'react'

export default function MarketingForm({
  submitButtonText = 'Submit',
  enableFirstName = true,
  enableLastName = true,
}) {
  return (
    <form
      action="https://ilovecoding.us3.list-manage.com/subscribe/post?u=0bf351e3ad180589cd43cdefb&amp;id=2555c81382"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate
    >
      <div id="mc_embed_signup_scroll">
        <label htmlFor="mce-EMAIL">
          <input
            autoFocus
            placeholder="Email Address"
            type="email"
            name="EMAIL"
            className="mb-1"
            id="mce-EMAIL"
          />
        </label>
        { enableFirstName && (
        <label htmlFor="mce-FNAME">
          <input
            placeholder="First Name"
            type="text"
            name="FNAME"
            className="mb-1"
            id="mce-FNAME"
          />
        </label>
        )}
        { enableLastName && (
        <label htmlFor="mce-LNAME">
          <input
            placeholder="Last Name"
            type="text"
            name="LNAME"
            className="mb-1"
            id="mce-LNAME"
          />
        </label>
        )}
        <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" style={{ display: 'none' }} />
          <div className="response" id="mce-success-response" style={{ display: 'none' }} />
        </div>
        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
          <input
            type="text"
            name="b_0bf351e3ad180589cd43cdefb_2555c81382"
            tabIndex="-1"
          />
        </div>
        <div className="clear">
          <input
            type="submit"
            value={submitButtonText}
            name="subscribe"
            id="mc-embedded-subscribe"
            className="btn btn-primary btn-block"
          />
        </div>
      </div>
    </form>
  )
}
