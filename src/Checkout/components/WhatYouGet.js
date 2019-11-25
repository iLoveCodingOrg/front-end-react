import React from 'react'

export default function WhatYouGet() {
  return (
    <div>
      <h4 className="mb-1 t-center">Here's What You Get:</h4>
      <ul className="list-group px-0 mb-1">
        <li className="list-group-item flex space-between color-green">
          <div>
            <h5 className="my-0">💪 Complete Developer Training</h5>
            <small className="color-gray">
              Step-by-step, look-over-my-shoulder style video training, that will teach you how to code and build practical and respectable websites, web apps, and mobile apps.
            </small>
          </div>
        </li>
        <li className="list-group-item flex space-between color-green">
          <div>
            <h5 className="my-0">🚀 Connect with Mentor</h5>
            <small className="color-gray">
              Access to a private Mentor-Moderated Student Community. Ask question and get help when you are stuck.
            </small>
          </div>
        </li>
        <li className="list-group-item flex space-between color-green">
          <div>
            <h5 className="my-0">🙌 Student Community</h5>
            <small className="color-gray">
              Connect &amp; learn from a community of students who share your learn-to-code journey. Talk to them them via the Private Student Community.
            </small>
          </div>
        </li>
      </ul>
    </div>
  )
}
