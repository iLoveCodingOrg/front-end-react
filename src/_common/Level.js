import React from 'react'
import PropTypes from 'prop-types'

export default function Level({ level }) {
  const renderSwitch = () => {
    switch (level) {
      case 0:
        return 'Beginner'
      case 1:
        return 'Intermediate'
      case 2:
        return 'Advance'
      default:
        return ''
    }
  }

  return (
    <small className="mr-1">
      Level:
      {' '}
      {renderSwitch()}
    </small>
  )
}

Level.propTypes = {
  level: PropTypes.oneOf([0, 1, 2]).isRequired,
}
