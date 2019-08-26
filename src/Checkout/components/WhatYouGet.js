import React from 'react'

export default function WhatYouGet() {
  return (
    <div>
      <h4 className="mb-1 text-center">Here's What You Get:</h4>
      <ul className="list-group mb-1">
        <li className="list-group-item flex justify-content-between text-success">
          <div>
            <h6 className="my-0">💪 Complete Developer Training</h6>
            <small className="text-muted">
              Step-by-step, look-over-my-shoulder style video training, that will teach you how to code and build practical and respectable websites, web apps, and mobile apps.
            </small>
          </div>
        </li>
        <li className="list-group-item flex justify-content-between text-success">
          <div>
            <h6 className="my-0">🚀 Connect with Mentor</h6>
            <small className="text-muted">
              Access to a private Mentor-Moderated Student Community. Ask question and get help when you are stuck.
            </small>
          </div>
        </li>
        <li className="list-group-item flex justify-content-between text-success">
          <div>
            <h6 className="my-0">🙌 Student Community</h6>
            <small className="text-muted">
              Connect &amp; learn from a community of students who share your learn-to-code journey. Talk to them them via the Private Student Community.
            </small>
          </div>
        </li>
      </ul>
    </div>
  )
}
