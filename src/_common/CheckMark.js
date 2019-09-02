import React from 'react'
import PropTypes from 'prop-types'

export default function CheckMark({ title }) {
  return (
    <span
      className="oi oi-circle-check color-teal"
      title={title}
      aria-hidden="true"
      style={{ paddingRight: '5px' }}
    />
  )
}

CheckMark.propTypes = {
  title: PropTypes.string,
}

CheckMark.defaultProps = {
  title: 'Complete',
}
