import React from 'react'
import PropTypes from 'prop-types'

class LessonCount extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <small className="mr-3">
        {this.props.lessonCount}
        {' '}
lessons
      </small>
    )
  }
}

LessonCount.propTypes = {
  lessonCount: PropTypes.number.isRequired,
}

export default LessonCount
