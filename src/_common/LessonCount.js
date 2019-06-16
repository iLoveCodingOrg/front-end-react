import React from 'react'
import PropTypes from 'prop-types'

export default function LessonCount({ lessonCount }) {
  return (
    <small className="mr-3">
      {lessonCount}
      {' '}
      lessons
    </small>
  )
}

LessonCount.propTypes = {
  lessonCount: PropTypes.number.isRequired,
}
