import React from 'react'
import PropTypes from 'prop-types'

export default function Duration({ duration }) {
  return (
    <small className="mr-1">
      {duration}
      {' '}
      mins
    </small>
  )
}

Duration.propTypes = {
  duration: PropTypes.string.isRequired,
}
