import React from 'react'
import PropTypes from 'prop-types'

export default function Access({ isFree, of }) {
  if (of === 'blog' || of === 'page') return null

  return isFree
    ? <span className="badge badge-pill badge-dark mr-3">FREE</span>
    : <span className="badge badge-pill badge-success mr-3">PRO</span>
}

Access.propTypes = {
  isFree: PropTypes.bool,
  of: PropTypes.oneOf(['question', 'lesson', 'course', 'page', 'blog']),
}

Access.defaultProps = {
  isFree: true,
  of: 'lesson',
}
