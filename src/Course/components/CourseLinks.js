import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

class CourseLinks extends React.Component {
  constructor(props) {
    super(props)
  }

  getPreviousBtn() {
    const { activeLessonIndex, lessons, courseSlug } = this.props
    if (activeLessonIndex > 0) {
      const lesson = lessons[activeLessonIndex - 1]
      const urlTo = `/courses/${courseSlug}/lessons/${lesson.slug}`
      return <Link to={urlTo} className="btn btn-gray-dark">&lt; Previous</Link>
    }
  }

  getMainCourseBtn() {
    const { isMainBtnHidden, courseSlug } = this.props
    if (!isMainBtnHidden) {
      const urlTo = `/courses/${courseSlug}`
      return <Link to={urlTo} className="btn btn-gray">Main Course Page</Link>
    }
  }

  getNextBtn() {
    const { activeLessonIndex, lessons, courseSlug } = this.props
    if (
      activeLessonIndex < lessons.length - 1
            && activeLessonIndex >= 0
    ) {
      const lesson = lessons[activeLessonIndex + 1]
      const urlTo = `/courses/${courseSlug}/lessons/${lesson.slug}`
      return <Link to={urlTo} className="btn btn-gray-dark">Next &gt;</Link>
    }
    return null
  }

  getStartBtn() {
    const { activeLessonIndex, lessons, courseSlug } = this.props
    if (activeLessonIndex < 0) {
      const lesson = lessons[activeLessonIndex + 1]
      const urlTo = `/courses/${courseSlug}/lessons/${lesson.slug}`
      return <Link to={urlTo} className="btn btn-primary">Begin Learning &gt;&gt;</Link>
    }
    return null
  }

  render() {
    return (
      <div className="btn-group " role="group" aria-label="Basic example">
        {this.getStartBtn()}
        {this.getPreviousBtn()}
        {this.getMainCourseBtn()}
        {this.getNextBtn()}
      </div>
    )
  }
}

CourseLinks.propTypes = {
  activeLessonIndex: PropTypes.number.isRequired,
  courseSlug: PropTypes.string.isRequired,
  isMainBtnHidden: PropTypes.bool.isRequired,
  lessons: PropTypes.array.isRequired,
}

export default CourseLinks
