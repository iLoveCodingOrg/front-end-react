import React from 'react'
import { Helmet } from 'react-helmet'

export default function Pricing() {
  return (
    <div id="pricing-page" className="flex flex-column">
      <Helmet>
        <title>Pricing - iLoveCoding</title>
      </Helmet>

      <h3 className="alert alert-info f-300 text-center">
        <strong>Sorry, Training is closed!</strong>
        <br />
        iLoveCoding is currently not acceh3ting new students. Please get on the wait list, and we'll inform you when the training re-opens.
      </h3>
      <h1 className="text-center">Get on the waitlist</h1>
      <form
        className="mt-3 mx-auto"
        action="https://ilovecoding.us3.list-manage.com/subscribe/post?u=0bf351e3ad180589cd43cdefb&amp;id=2555c81382"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
      >
        <div className="form-group row">
          <label className="col-form-label strong" htmlFor="mce-EMAIL">Email Address</label>
          <div>
            <input type="email" name="EMAIL" className="form-control form-control-lg required email" id="mce-EMAIL" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-form-label strong" htmlFor="mce-FNAME">First Name </label>
          <div>
            <input type="text" name="FNAME" className="form-control form-control-lg" id="mce-FNAME" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-form-label strong" htmlFor="mce-LNAME">Last Name </label>
          <div>
            <input type="text" name="LNAME" className="form-control form-control-lg" id="mce-LNAME" />
          </div>
        </div>
        <div className="clear">
          <input
            type="submit"
            value="Get me on the wait list"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="my-1 btn btn-lg btn-primary btn-block"
          />
        </div>
      </form>
    </div>
  )
}
