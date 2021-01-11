import React from 'react'
import { Link } from 'react-router-dom'
import { CURRENT_YEAR } from '../../_app/constants'

function getDay() {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const day = (new Date()).getDay()
  return weekday[day]
}

export default ({ className }) => (
  <small className={`d-block mt-3 mb-1 color-gray ${className}`}>
    © 2014 -
    {' '}
    {CURRENT_YEAR}
    {' '}
    iLoveCoding Inc. ⚡ by drive and commitment.
    <Link to="/pages/privacy" className="pl--25 color-gray"><u>Privacy</u></Link>
    <Link to="/pages/terms" className="pl--25 color-gray"><u>Terms</u></Link>
    <div>
      Have a great
      {' '}
      {getDay()}
      {' '}
      <span role="img" aria-label="Okay Emoji">👌</span>
    </div>
  </small>
)
