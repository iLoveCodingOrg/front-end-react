import React from 'react'
import PropTypes from 'prop-types'

export default function Access({ isFree, of }) {
  if (of === 'blog' || of === 'page') return null

  return isFree
    ? <small className="badge bg-gray-dark mr-1">FREE</small>
    : <small className="badge bg-success mr-1">PAID</small>
}

Access.propTypes = {
  isFree: PropTypes.bool,
  of: PropTypes.oneOf(['question', 'lesson', 'course', 'page', 'blog']),
}

Access.defaultProps = {
  isFree: true,
  of: 'lesson',
}
