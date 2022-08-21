import React from 'react'
import { CheckMark } from '../../_common'

export default () => (
  <div className="my-1">
    <div className="mb--5 strong">Unlimited Access to Training:</div>

    <div><CheckMark />{' '} Module 1: Fundamentals of Programming and Web</div>
    <div><CheckMark />{' '} Module 2: Modern Front-End Development</div>
    <div><CheckMark />{' '} Module 3: Back-end Development and Databases</div>
    <div><CheckMark />{' '} Module 5: Electives (Git, Working with API, etc.)</div>
    <div><CheckMark />{' '} Downloadable Cheat Sheets</div>
    <div><CheckMark />{' '} Downloadable Source Code</div>
    <div><CheckMark />{' '} Access to Homework with solutions walkthrough</div>
    <div><CheckMark />{' '} Interview Prep Tips along side topic</div>
    <div><CheckMark />{' '} Certificate of Completion </div>
    <br />
    <div className="mb--5 strong">Mentor-Led Private Student Community:</div>
    <div><CheckMark />{' '} Get help from peers and mentors</div>
    <div><CheckMark />{' '} All questions answered</div>
    <div><CheckMark />{' '} Stay Anonomous if preferred</div>

    {/* <br />
    <div className="mb--5 strong">Premium Support:</div>

    <div>
      <span className="oi oi-x color-red" title="x" aria-hidden="true" />
      {' '} Weekly live group call (with mentor)
    </div> */}
  </div>
)
