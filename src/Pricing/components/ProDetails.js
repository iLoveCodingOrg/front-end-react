import React from 'react'
import { CheckMark } from '../../_common'

export default () => (
  <div className="my-1">
    <div className="mb--5 strong">Unlimited Access to Training:</div>
    <div>
      <CheckMark />
      {' '}
Access to all Courses and Practice Projects
    </div>
    <div>
      <CheckMark />
      {' '}
Downloadable Source Code
    </div>
    <div>
      <CheckMark />
      {' '}
Downloadable Cheat Sheets
    </div>
    <div>
      <CheckMark />
      {' '}
Access to Homework
    </div>

    <br />
    <div className="mb--5 strong">Private Student Community:</div>
    <div>
      <CheckMark />
      {' '}
Get help from peers and mentors
    </div>
    <div>
      <CheckMark />
      {' '}
All questions answered
    </div>

    <br />
    <div className="mb--5 strong">Premium Support:</div>

    <div>
      <span className="oi oi-x color-red" title="x" aria-hidden="true" />
      {' '}
Weekly live group call (with mentor)
    </div>
  </div>
)
