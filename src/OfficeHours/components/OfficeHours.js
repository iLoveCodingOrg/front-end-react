import React from 'react'
import { Helmet } from 'react-helmet'

export default class OfficeHours extends React.Component {
  componentDidMount() {
    const script = document.createElement('script')

    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true

    document.body.appendChild(script)
  }

  render() {
    return (
      <div className="flex flex-column">
        <Helmet>
          <title>Schedule office hours with Aziz Ali - iLoveCoding</title>
        </Helmet>
        <div className="align-self-center mt-1">
          <h1>
            Schedule office hours with Aziz Ali
          </h1>

          <h3 className="f-300">
            Pick a date and time from the options below and schedule one-on-one time with me.
          </h3>
          <h3 className="f-300">
            Take advantage of the time that I have available. Pick my brain, take advantage of my expertise while I am available. As I start getting busy I will no longer be able to offer this personalized service.
          </h3>

          <div className="card card-info pb-0">
            <h5>
              Please come to the call prepared
            </h5>
            <ol>
              <li>Write all your questions down.</li>
              <li>If you need to discuss some code challenges, have your computer and project ready.</li>
              <li>Test using Google Hangout, test your microphone and camera before our scheduled time.</li>
            </ol>
            <hr />
            <p>
              <strong>Note:</strong>
              {' '}
              All sessions happen on Google Hangout. This way we can see each other and even share our screens to discuss any code problems you want addressed.
            </p>
          </div>
        </div>
        <div className="align-self-center ">
          {/* <!-- Calendly inline widget begin --> */}
          <div
            className="calendly-inline-widget border"
            data-url="https://calendly.com/azizali/officehours"
            style={{ minWidth: '320px', height: '580px' }}
          />

          <script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
          />
          {/* <!-- Calendly inline widget end --> */}
        </div>
      </div>
    )
  }
}
